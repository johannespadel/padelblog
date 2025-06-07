import { client, POSTS_QUERY } from '@/sanity/client'
import { Post } from '@/lib/types'
import Hero from '@/components/Hero'
import PostCard from '@/components/PostCard'
import EmptyState from '@/components/EmptyState'

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
      <Hero />
      
      <section id="posts" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Siste innlegg</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Utforsk mine tanker og erfaringer innen teknologi, programmering og andre interessante emner.
            </p>
          </div>

          {posts.length > 0 ? (
            <div className="grid gap-8 md:gap-12">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="Ingen innlegg ennå"
              description="Jeg jobber med å skrive interessant innhold. Kom tilbake snart!"
              actionText="Gå til Studio"
              actionHref="https://padelblog.sanity.studio"
            />
          )}
        </div>
      </section>
    </div>
  )
}