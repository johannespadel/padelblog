export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
            <span className="text-lg font-bold text-white">JP</span>
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          Velkommen til min
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> blogg</span>
        </h1>
        
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
          Heisann! Dette er min personlige blogg hvor jeg deler tanker, erfaringer og prosjekter. 
          Følg med for oppdateringer om teknologi, programmering og hverdagsliv.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#posts" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            Les mine innlegg
            <svg className="ml-2 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
          <a 
            href="https://padelblog.sanity.studio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            Sanity Studio
            <svg className="ml-2 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}