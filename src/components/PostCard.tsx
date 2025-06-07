import Link from 'next/link'
import { Post } from '@/lib/types'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article data-testid="post-card" className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-gray-300 transition-all duration-300">
      <div className="p-8">
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
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

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          <Link href={`/posts/${post.slug.current}`} className="stretched-link">
            {post.title}
          </Link>
        </h3>

        <p className="text-gray-600 leading-relaxed mb-6">
          {post.description || 'Les mer for å oppdage innholdet i dette innlegget.'}
        </p>

        <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
          <span>Les mer</span>
          <span className="ml-1 group-hover:translate-x-0.5 transition-transform">→</span>
        </div>
      </div>
    </article>
  )
}