import ClickableText from "./ClickableText"

export default function ClickableTitle({ text, type = "tour", className = "", as: Component = "h2" }) {
  return <ClickableText text={text} type={type} className={className} as={Component} />
}
