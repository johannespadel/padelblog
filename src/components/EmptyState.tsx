interface EmptyStateProps {
  title: string
  description: string
  actionText?: string
  actionHref?: string
}

export default function EmptyState({ title, description, actionText, actionHref }: EmptyStateProps) {
  return (
    <div className="text-center py-12 px-6">
      <div className="w-12 h-12 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
        <span className="text-gray-400 text-xl">📝</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 max-w-md mx-auto">{description}</p>
      {actionText && actionHref && (
        <a 
          href={actionHref}
          target="_blank"
          rel="noopener noreferrer" 
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm"
        >
          {actionText}
          <span className="ml-1">↗</span>
        </a>
      )}
    </div>
  )
}