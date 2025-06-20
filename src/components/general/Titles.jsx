import ClickableText from "./ClickableText"

export default function Title({ title, type = "tour" }) {
  return (
    <div>
      <ClickableText text={title} type={type} className="m-b font-bold text-center text-fs-32" as="h1" />
    </div>
  )
}
