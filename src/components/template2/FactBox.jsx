export default function FactBox({ data }) {
  if (!data) return null

  return (
    <>
      <div className="bg-gry-50 my-6 rounded-lg">
        <div className="p-4">
          <p className="m-s-b mb-4 text-fs-14 text-[#1a202c]">{data.title.es}</p>
          <p className="text-gray-600 text-justify m-m text-fs-14">{data.fact.es}</p>
        </div>
      </div>
    </>
  )
}
