export default function ImageListingTour() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="h-[200px]">
          <img
            src="/placeholder.svg?height=200&width=300"
            alt={`tour image ${index + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  )
}
