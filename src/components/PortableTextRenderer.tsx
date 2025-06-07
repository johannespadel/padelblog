import { PortableText } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/types'

interface PortableTextRendererProps {
  value: PortableTextBlock[]
}

const portableTextComponents = {
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold text-gray-900 mt-12 mb-6 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-semibold text-gray-900 mt-10 mb-5 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 leading-tight">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3 leading-tight">
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 my-8 italic text-gray-700 bg-blue-50 py-4 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-8 mb-6 space-y-2 text-gray-700">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-8 mb-6 space-y-2 text-gray-700">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="leading-relaxed">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="leading-relaxed">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-gray-800">{children}</em>
    ),
    code: ({ children }: any) => (
      <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono border">
        {children}
      </code>
    ),
    link: ({ children, value }: any) => (
      <a 
        href={value.href} 
        className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-500 transition-colors"
        target={value.href?.startsWith('http') ? '_blank' : '_self'}
        rel={value.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
  },
  types: {
    code: ({ value }: any) => (
      <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto my-8 border">
        <code className="text-sm font-mono leading-relaxed">
          {value.code}
        </code>
      </pre>
    ),
  },
}

export default function PortableTextRenderer({ value }: PortableTextRendererProps) {
  if (!value || !Array.isArray(value)) {
    return (
      <div className="text-gray-600 bg-gray-50 p-6 rounded-lg border">
        <p className="mb-4">Innholdet kunne ikke vises riktig.</p>
        <details className="text-sm">
          <summary className="cursor-pointer font-medium text-gray-700 hover:text-gray-900">
            Vis teknisk informasjon
          </summary>
          <pre className="bg-white p-4 mt-2 text-xs overflow-auto border rounded">
            {JSON.stringify(value, null, 2)}
          </pre>
        </details>
      </div>
    )
  }

  return (
    <div className="prose prose-lg max-w-none">
      <PortableText value={value} components={portableTextComponents} />
    </div>
  )
}