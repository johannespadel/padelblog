import { client, POST_QUERY, POSTS_QUERY } from '@/sanity/client'
import { Post } from '@/lib/types'
import PortableTextRenderer from '@/components/PortableTextRenderer'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ slug: string }>
}

async function getPost(slug: string): Promise<Post | null> {
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

export async function generateStaticParams() {
  try {
    if (!client) {
      console.warn('Sanity client not configured')
      return []
    }
    
    const posts: Post[] = await client.fetch(POSTS_QUERY)
    const params = posts?.map((post) => ({
      slug: post.slug.current,
    })) || []
    
    return params
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params
  
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <article>
          <header className="mb-12 text-center">
            <Link 
              href="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors text-sm"
            >
              <svg className="mr-1 h-2.5 w-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Tilbake til forsiden
            </Link>
            
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center gap-4 text-gray-600 mb-8">
              <time className="font-medium">
                {new Date(post._createdAt).toLocaleDateString('nb-NO', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span>•</span>
              <span className="font-medium">{post.author?.name || 'Johannes Padel'}</span>
            </div>
            
            {post.description && (
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                {post.description}
              </p>
            )}
          </header>

          <div className="max-w-3xl mx-auto">
            <PortableTextRenderer value={post.body || []} />
          </div>

          <footer className="mt-16 pt-8 border-t border-gray-200 text-center">
            <Link 
              href="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm"
            >
              <svg className="mr-1 h-2.5 w-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Tilbake til forsiden
            </Link>
          </footer>
        </article>
      </div>
    </div>
  )
}