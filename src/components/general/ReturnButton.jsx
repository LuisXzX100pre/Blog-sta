"use client"

import { useNavigate, useLocation } from "react-router-dom"

export default function ReturnButton() {
  const navigate = useNavigate()
  const location = useLocation()

  if (location.pathname === "/") {
    return null
  }
  const handleReturn = (e) => {
    e.preventDefault()
    navigate(-1)
   
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
