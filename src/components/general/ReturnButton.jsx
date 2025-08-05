"use client"

import { useRouter, usePathname } from "next/navigation"

export default function ReturnButton() {
  const router = useRouter()
  const pathname = usePathname()

  if (pathname === "/") {
    return null
  }

  const handleReturn = (e) => {
    e.preventDefault()
    router.back()
    window.scrollTo(0, 0)
  }

  return (
    <button
      onClick={handleReturn}
      className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors"
    >
      <img src="https://photos.staywuw.com/assets/icons/arrows/left-100.svg" alt="Regresar" className="w-5 h-5 mr-2" />
      <span>Regresar</span>
    </button>
  )
}
