export default function WelcomeImage({ source }) {
  return (
    <>
      <div className="mb-[44px]">
        <img
          className="w-full h-[310px] object-cover"
          style={{ borderRadius: '0.5em' }}
          src={source || "/placeholder.svg"}
          alt="Background imagen"
        />
      </div>
    </>
  );
}