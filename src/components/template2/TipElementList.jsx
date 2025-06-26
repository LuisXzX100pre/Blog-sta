export default function TipElementList({ tip, index, lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  return (
    <li className="mb-4">
      <span className="m-s-b text-fs-16 text-[#eb741e]">{index + 1}. </span>
      <span className="m-m text-fs-14 text-gry-100">{getText(tip.text) || tip.text}</span>
    </li>
  )
}
