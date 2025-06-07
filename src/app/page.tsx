import { client, POSTS_QUERY } from '@/sanity/client'
import { Post } from '@/lib/types'
import Link from 'next/link'

async function getPosts(): Promise<Post[]> {
  try {
    if (!client) {
      console.warn('Sanity client not configured')
      return []
    }
    
    const posts = await client.fetch(POSTS_QUERY)
    console.log('Fetched posts:', JSON.stringify(posts, null, 2))
    return posts || []
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export default async function Home() {
  const posts = await getPosts()

  return (
    <div>
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to my blog</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Heisann. Dette er min personlige blogg hvor jeg deler tanker, erfaringer og prosjekter.
          Følg med for oppdateringer om teknologi, programmering og hverdagsliv. Jeg håper du finner noe interessant her!
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Recent Posts</h2>
        {posts.length > 0 ? (
          <div className="space-y-6">
            {posts.map((post) => (
              <article key={post._id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2">
                  <Link href={`/posts/${post.slug.current}`} className="hover:text-blue-600">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-3">
                  {post.description || 'No description available'}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <time>{new Date(post._createdAt).toLocaleDateString()}</time>
                  <span>•</span>
                  <span>By {post.author?.name || 'Unknown Author'}</span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">No posts yet. Check back soon!</p>
            <p className="text-sm text-gray-500">Posts will appear here once they are published in Sanity Studio.</p>
          </div>
        )}
      </section>
    </div>
  )
}