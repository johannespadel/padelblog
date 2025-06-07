export default function LearningClaudeCodePost() {
  return (
    <article className="prose prose-lg max-w-none">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Learning Claude Code</h1>
        <div className="flex items-center gap-4 text-gray-600">
          <time>January 2, 2024</time>
          <span>•</span>
          <span>By Johannes Padel</span>
        </div>
      </header>

      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          Recently, I've been exploring Claude Code, Anthropic's terminal-based AI assistant 
          for developers. It's been an fascinating journey learning how to effectively 
          collaborate with AI in a command-line environment.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">First Impressions</h2>
        
        <p>
          What immediately struck me about Claude Code is how naturally it integrates into 
          a developer's workflow. Unlike web-based AI tools that require context switching, 
          Claude Code works directly in your terminal, understanding your project structure 
          and codebase.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Key Learning Points</h2>

        <p>
          Through building this very blog, I've learned several important lessons:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Clear communication is crucial:</strong> The more specific you are about 
            what you want, the better results you get.
          </li>
          <li>
            <strong>Iterative development works well:</strong> Breaking down complex tasks 
            into smaller steps leads to better outcomes.
          </li>
          <li>
            <strong>Understanding project context:</strong> Claude Code excels when it 
            understands your project's architecture and conventions.
          </li>
          <li>
            <strong>Git integration is powerful:</strong> The seamless integration with 
            version control makes collaboration smooth and traceable.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Building This Blog</h2>

        <p>
          This blog itself is a product of learning Claude Code. Starting from a simple 
          README file, we've built a complete Next.js application with TypeScript, 
          Tailwind CSS, and GitHub Pages deployment configuration.
        </p>

        <p>
          The process involved setting up the project structure, configuring all the 
          necessary tools, creating the layout and components, and even writing these 
          very blog posts. It's been a great way to experience AI-assisted development 
          in practice.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Looking Forward</h2>

        <p>
          I'm excited to continue exploring what's possible with AI-assisted development. 
          Future posts will likely dive deeper into specific techniques, challenges I 
          encounter, and solutions we discover together.
        </p>

        <p>
          The combination of human creativity and AI capability opens up new possibilities 
          for how we build software. I'm looking forward to sharing more of this journey 
          with you.
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