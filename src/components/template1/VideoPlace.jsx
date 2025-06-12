export default function VideoPlace({ data }) {
  return (
    <div>
      <h3 className="text-fs-20 m-b mb-4">{data.title.es}</h3>
      <div className="grid grid-cols-2 gap-x-[16px] gap-y-[24px] text-gry-100 text-fs-14 m-m">
        {data.descriptionParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph.es}</p>
        ))}
      </div>

      {/* VIDEO */}
      <div className="h-[437px] w-full rounded-lg mt-11">
        <iframe
          src={data.video.embedUrl}
          frameBorder="0"
          allowFullScreen
          width={"100%"}
          height={"100%"}
          className="rounded-lg"
          aria-label={data.video.ariaTitle.es}
        ></iframe>
      </div>
      <p className="text-fs-12 text-gry-100 italic mt-2 text-center">{data.videoCaption.es}</p>
    </div>
  )
}
