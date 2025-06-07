import { client, POST_QUERY, POSTS_QUERY } from '@/sanity/client'
import { Post } from '@/lib/types'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ slug: string }>
}

async function getPost(slug: string): Promise<Post | null> {
  // Return null if running during build without Sanity access
  if (typeof window === 'undefined' && process.env.NODE_ENV === 'production') {
    return null
  }
  
  try {
    if (!client) {
      console.warn('Sanity client not configured')
      return null
    }
    const post = await client.fetch(POST_QUERY, { slug })
    return post || null
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

// Generate static params for all posts at build time
export async function generateStaticParams() {
  // Return placeholder during production build when Sanity might not be accessible
  if (process.env.NODE_ENV === 'production') {
    return [{ slug: 'placeholder-post' }]
  }
  
  try {
    if (!client) {
      console.warn('Sanity client not configured')
      return [{ slug: 'placeholder-post' }]
    }
    
    const posts: Post[] = await client.fetch(POSTS_QUERY)
    const params = posts?.map((post) => ({
      slug: post.slug.current,
    })) || []
    
    // If no posts exist yet, return a placeholder to prevent build errors
    if (params.length === 0) {
      return [{ slug: 'placeholder-post' }]
    }
    
    return params
  } catch (error) {
    console.error('Error generating static params:', error)
    // Return placeholder to prevent build errors when Sanity is not accessible
    return [{ slug: 'placeholder-post' }]
  }
}

const portableTextComponents = {
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-semibold mt-8 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-semibold mt-6 mb-3">{children}</h3>,
    normal: ({ children }: any) => <p className="mb-4 leading-relaxed">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 my-6 italic">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => (
      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">{children}</code>
    ),
    link: ({ children, value }: any) => (
      <a href={value.href} className="text-blue-600 hover:text-blue-800 underline">
        {children}
      </a>
    ),
  },
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params
  
  // Handle placeholder post
  if (slug === 'placeholder-post') {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold mb-4">No Posts Available</h1>
        <p className="text-gray-600 mb-4">There are no blog posts yet.</p>
        <p className="text-sm text-gray-500">Create posts in your Sanity Studio to see them here.</p>
        <Link href="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
          ← Back to home
        </Link>
      </div>
    )
  }
  
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  console.log('Post data:', JSON.stringify(post, null, 2))

  return (
    <article className="prose prose-lg max-w-none">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-gray-600">
          <time>{new Date(post._createdAt).toLocaleDateString()}</time>
          <span>•</span>
          <span>By {post.author?.name || 'Unknown Author'}</span>
        </div>
      </header>

      <div className="mb-8">
        {post.body && Array.isArray(post.body) ? (
          <PortableText value={post.body} components={portableTextComponents} />
        ) : (
          <div className="text-gray-600">
            <p>Content could not be rendered properly.</p>
            <pre className="bg-gray-100 p-4 mt-4 text-sm overflow-auto">
              {JSON.stringify(post.body, null, 2)}
            </pre>
          </div>
        )}
      </div>

      <footer className="mt-12 pt-8 border-t">
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          ← Back to home
        </Link>
      </footer>
    </article>
  )
}