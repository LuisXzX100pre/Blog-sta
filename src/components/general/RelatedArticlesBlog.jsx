
export default function RelatedArticlesBlog() {
  return (
    <div div className="my-[64px]">
      <h3 className="m-b text-fs-24 mb-9">Artículos relacionados</h3>
      <div className="flex flex-col gap-4">

        {/* CARDS RELATED ARTICLES */}
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="shadow-3xl w-[674px] h-[190px] px-4 pt-4 pb-6 flex rounded-lg gap-4 max-md:w-full max-md:flex-col max-md:h-auto"
          >
            <div className="w-[220px] max-md:w-full max-md:h-[200px]">
              <img
                src="https://www.micancun.org/wp-content/uploads/2022/05/historial-del-mirador-de-cancun-640x400.jpg"
                alt="card related articles"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-2 w-[60%] max-md:w-full">
              <span className="text-[#d1d2d5] text-fs-12 m-m">
                Abril,1,2024
              </span>
              {/* NAME CARD */}
              <span className="text-fs-16 m-b truncate">El mirador, playa delfines</span>
              {/* DESCRIPTION */}
              <div className="text-fs-12 m-m text-gry-100 text-wrap">
                Este lugar es muy recomendado para visitarlo en familia o con
                amigos, pudiendo pasar los días disfrutando bajo el sol de
                Cancún y refrescándote en la inmensidad de las aguas del Mar
                Caribe...
              </div>

              <div className="rounded-full bg-gry-50 text-gry-100 px-2 py-1 w-fit text-fs-10">
                Playas
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
