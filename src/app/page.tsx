export default function Home() {
  return (
    <div>
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to my blog</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Hi, I'm Johannes Padel. This is my personal blog where I share thoughts, 
          experiences, and insights about technology, life, and whatever else comes to mind.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Recent Posts</h2>
        <div className="space-y-6">
          <article className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">
              <a href="/posts/welcome" className="hover:text-blue-600">
                Welcome to my blog
              </a>
            </h3>
            <p className="text-gray-600 mb-3">
              My first post introducing this blog and what you can expect to find here.
            </p>
            <time className="text-sm text-gray-500">January 1, 2024</time>
          </article>

          <article className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">
              <a href="/posts/learning-claude-code" className="hover:text-blue-600">
                Learning Claude Code
              </a>
            </h3>
            <p className="text-gray-600 mb-3">
              My experience learning to use Claude Code for terminal-based development.
            </p>
            <time className="text-sm text-gray-500">January 2, 2024</time>
          </article>
        </div>
      </section>
    </div>
  )
}