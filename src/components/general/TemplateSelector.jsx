import { Link } from "react-router-dom"

export default function TemplateSelector() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-8 shadow-sm">
      <h3 className="text-fs-16 m-s-b mb-4 text-gray-700">Seleccionar Template</h3>
      <div className="flex gap-3 flex-wrap">
        <Link
          to="/template1"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-fs-14 m-mmb inline-block text-center"
        >
          Template 1
        </Link>
        <Link
          to="/template2"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-green-600 transition-colors text-fs-14 m-mmb inline-block text-center"
        >
          Template 2
        </Link>
        <Link
          to="/template3"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-purple-600 transition-colors text-fs-14 m-mmb inline-block text-center"
        >
          Template 3
        </Link>
      </div>
    </div>
  )
}
