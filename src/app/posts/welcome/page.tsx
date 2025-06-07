export default function WelcomePost() {
  return (
    <article className="prose prose-lg max-w-none">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to my blog</h1>
        <div className="flex items-center gap-4 text-gray-600">
          <time>January 1, 2024</time>
          <span>•</span>
          <span>By Johannes Padel</span>
        </div>
      </header>

      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          Welcome to my personal blog! I'm Johannes Padel, and this is where I'll be 
          sharing my thoughts, experiences, and insights on various topics that interest me.
        </p>

        <p>
          This blog serves multiple purposes. First and foremost, it's a space for me to 
          document my journey and share what I learn along the way. Whether it's about 
          technology, personal growth, or interesting discoveries, you'll find it here.
        </p>

        <p>
          I built this blog as a learning exercise using modern web technologies including 
          Next.js, React, TypeScript, and Tailwind CSS. It's deployed on GitHub Pages, 
          making it fast and accessible to everyone.
        </p>

        <p>
          What can you expect to find here? I'll be writing about:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Technology and programming insights</li>
          <li>Personal projects and their development</li>
          <li>Thoughts on productivity and learning</li>
          <li>Random musings and observations</li>
        </ul>

        <p>
          I hope you find something valuable in these posts. Feel free to reach out if 
          you have any thoughts or questions about what I share here.
        </p>

        <p>
          Thanks for visiting, and I look forward to sharing this journey with you!
        </p>
      </div>

      <footer className="mt-12 pt-8 border-t">
        <a href="/" className="text-blue-600 hover:text-blue-800">
          ← Back to home
        </a>
      </footer>
    </article>
  )
}