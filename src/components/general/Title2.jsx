import { useClickableText } from "../../hooks/useClickableText"

export default function Title2({ title, type = "tour" }) {
  const { processText } = useClickableText()

  // Solo procesar si es tipo hotel y contiene "Cancún"
  const shouldMakeClickable = type === "hotel" && title.toLowerCase().includes("cancún")

  if (!shouldMakeClickable) {
    return <h2 className="text-fs-24 m-s-b text-[#1a202c] mb-4">{title}</h2>
  }

  const processedContent = processText(title, type)

  return <h2 className="text-fs-24 m-s-b text-[#1a202c] mb-4" dangerouslySetInnerHTML={{ __html: processedContent }} />
}
