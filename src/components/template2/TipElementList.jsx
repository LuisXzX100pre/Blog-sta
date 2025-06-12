export default function TipElementList({ tip, index }) {
  return (
    <>
      <li className="mb-5 flex items-center">
        <span className="text-fs-28 mr-3 m-s-b text-[#1a202c]">{index + 1}.</span>
        <p className="text-fs-14 m-m text-gry-100">{tip.text.es}</p>
      </li>
    </>
  )
}
