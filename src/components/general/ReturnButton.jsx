import { Link } from "react-router-dom"

export default function ReturnButton() {
  return (
    <div className="mb-4">
      <Link
        to="/"
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
      >
        ← Volver al inicio
      </Link>
    </div>
  )
}
