export default function CategoryTags() {
  return (
    <div className="mt-[64px] flex max-md:flex-col max-md:gap-4">
      <div className="w-1/2 max-md:w-full">

        <h3 className="m-s-b text-fs-16 mb-4">Categorías</h3>

        <div className="flex gap-2 overflow-auto">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="rounded-full px-4 py-[10px] bg-gry-50 text-gry-100"
            >
              #Cancún
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/2 flex gap-2 justify-end items-end max-md:justify-start">
        <div className="rounded-full w-11 h-11 bg-gry-50 items-center flex justify-center">
          <img src="https://photos.staywuw.com/assets//icons/face/face-bl.svg" />
        </div>
        <div className="rounded-full w-11 h-11 bg-gry-50 items-center flex justify-center">
          <img src="https://photos.staywuw.com/assets//icons/whats/whats-bl.svg" />
        </div>
        <div className="rounded-full w-11 h-11 bg-gry-50 items-center flex justify-center">
          <img src="https://photos.staywuw.com/assets//icons/in/in-bl.svg" />
        </div>
      </div>
    </div>

  );
}
