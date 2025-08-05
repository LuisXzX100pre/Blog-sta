"use client"

import { useIntelligentData } from "../../utils/intelligentDataAdapter"

export default function IntelligentComponent({
  data,
  componentType,
  fallbackData = {},
  children,
  className = "",
  ...props
}) {
  // Adaptar los datos inteligentemente
  const adaptedData = useIntelligentData(data, componentType, fallbackData)

  // Renderizar el componente hijo con los datos adaptados
  if (typeof children === "function") {
    return (
      <div className={className} {...props}>
        {children(adaptedData)}
      </div>
    )
  }

  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}

// Hook para usar en componentes funcionales
export function useAdaptedData(data, componentType, fallbackData = {}) {
  return useIntelligentData(data, componentType, fallbackData)
}
