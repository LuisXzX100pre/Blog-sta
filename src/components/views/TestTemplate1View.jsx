"use client"

export default function TestTemplate1View() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-blue-100 border border-blue-400 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-blue-800 mb-4">
          🎉 ¡FUNCIONA! Este es SOLO el Template 1
        </h1>
        <p className="text-blue-700">
          Si ves este mensaje, significa que la navegación a Template 1 está funcionando correctamente.
        </p>
        <div className="mt-4 p-4 bg-white rounded border">
          <p className="text-sm text-gray-600">
            <strong>Ruta actual:</strong> /template1<br/>
            <strong>Vista:</strong> TestTemplate1View.jsx<br/>
            <strong>Estado:</strong> ✅ Funcionando correctamente
          </p>
        </div>
      </div>
    </div>
  )
}