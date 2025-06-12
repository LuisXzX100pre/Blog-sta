export default function WelcomeImage({ source }) {
  return (
    <>
      {/* Este componente obtendrá las imagenes de encabezado de todas las entradas de los blogs. */}
      <div className="mb-[44px]">
        <img
          className="rounded-md w-full h-[310px] object-cover"
          src={source}
          alt="Background imagen"
        />
      </div>
    </>
  );
}
