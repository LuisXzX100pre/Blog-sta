export default function VideoPlace({ data }) {
  if (!data) {
    console.log("VideoPlace: datos insuficientes", data)
    return null
  }

  return (
    <div className="my-11">
      <h3 className="text-fs-20 m-b mb-4">{data.title?.es}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 text-gry-100 text-fs-14 m-m mb-8">
        {data.descriptionParagraphs &&
          data.descriptionParagraphs.map((paragraph, index) => <p key={index}>{paragraph.es}</p>)}
      </div>

      {/* VIDEO */}
      <div className="h-[250px] md:h-[437px] w-full overflow-hidden border border-gray-200 shadow-sm" style={{ borderRadius: '0.5em' }}>
        <iframe
          src={data.video?.embedUrl}
          frameBorder="0"
          allowFullScreen
          width="100%"
          height="100%"
          style={{ borderRadius: '0.5em' }}
          aria-label={data.video?.ariaTitle?.es}
        />
      </div>

      {data.videoCaption && <p className="text-fs-12 text-gry-100 italic mt-2 text-center">{data.videoCaption.es}</p>}
    </div>
  )
}