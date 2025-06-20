import { useClickableText } from "../../hooks/useClickableText"

export default function Title({ title, type = "tour" }) {
  const { processText } = useClickableText()

  // Solo procesar si es tipo hotel y contiene "Cancún"
  const shouldMakeClickable = type === "hotel" && title.toLowerCase().includes("cancún")

  if (!shouldMakeClickable) {
    return (
      <div>
        <h1 className="m-b font-bold text-center text-fs-32">{title}</h1>
      </div>
    )
  }

  const processedContent = processText(title, type)

  return (
    <div>
      <h1 className="m-b font-bold text-center text-fs-32" dangerouslySetInnerHTML={{ __html: processedContent }} />
    </div>
  )
}
