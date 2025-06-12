export default function FromToBlog() {
  return (
    <div className="mt-11">
      <h3 className="text-fs-20 m-b mb-6">Desde Puerto Juárez a....</h3>
      <div className="flex flex-col gap-9">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex gap-6">
            <div className="flex gap-4">
              <span className="m-s-b text-fs-28">{index + 1}.</span>
              <div className="flex flex-col gap-4 text-gry-100 text-fs-14">
                <p>
                  Si te encuentras en Cancún y deseas llegar a Puerto Juárez, ya sea para tomar el ferry a Isla Mujeres,
                  visitar la zona arqueológica El Meco, recorrer el pequeño pueblo o disfrutar de su gastronomía,
                  conocer y refrescarte con sus playas, entonces aquí te explicaremos paso a paso cómo hacerlo.
                </p>
                <p>
                  Como ya debes saber, el centro de Cancún es el punto en el cual se toman los camiones, colectivos y
                  taxis para poder llegar a cualquier otra parte de Cancún o incluso fuera de él. Por ende, ya te debes
                  imaginar que para llegar a Puerto Juárez, primero necesitas estar en el centro de Cancún.
                </p>
                <p>
                  Entonces, ¿Cómo puedo llegar al centro de Cancún? Normalmente no es muy complicado llegar al centro de
                  Cancún, casi todas las rutas de los camiones de transporte público llegan por aquí, sin embargo el
                  centro de Cancún es un poco amplio en contexto de la palabra, entonces ¿Cómo llegar a Puerto Juárez
                  desde el centro de Cancún? .
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
