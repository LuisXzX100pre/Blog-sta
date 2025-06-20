import ClickableText from "./ClickableText"

export default function Title2({ title, type = "tour" }) {
  return <ClickableText text={title} type={type} className="text-fs-24 m-s-b text-[#1a202c] mb-4" as="h2" />
}
