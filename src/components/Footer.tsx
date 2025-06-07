export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Johannes Padel
          </h3>
          <p className="text-gray-600 mb-6">
            Personlig blogg om teknologi, programmering og hverdagsliv
          </p>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="https://github.com/johannespadel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors text-sm"
            >
              GitHub
            </a>
          </div>
          
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Johannes Padel. Laget med Next.js og Sanity.
          </p>
        </div>
      </div>
    </footer>
  )
}