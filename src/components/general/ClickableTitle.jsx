import { useClickableText } from "../../hooks/useClickableText"

export default function ClickableTitle({ text, type = "tour", className = "", as: Component = "h2" }) {
  const { processText } = useClickableText()

  // Solo procesar si es tipo hotel y contiene "Cancún"
  const shouldMakeClickable = type === "hotel" && text.toLowerCase().includes("cancún")

  if (!shouldMakeClickable) {
    return <Component className={className}>{text}</Component>
  }

  const processedContent = processText(text, type)

  return <Component className={className} dangerouslySetInnerHTML={{ __html: processedContent }} />
}
