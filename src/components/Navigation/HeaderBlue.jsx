// "use client";

// import { useContext } from "react";

// import { Container } from "@/config/Others/Container";
// import LanguageContext from "@/language/LanguageContext";
import { Container } from "../general/Container";

export default function HeaderBlue() {
  // const { languageData } = useContext(LanguageContext);

  return (
    <div className="relative w-full flex items-center ">
      <div className="absolute left-0 flex items-center px-8 bg-bl-100 w-[100%] md:w-[55%] lg:w-[51%] h-12 top-0 border-b rounded-br-[5rem] p-6" />
      <Container>
        <div className="relative flex items-center gap-[44px] mt-[14px] z-[3] md:w-3/5 max-md:gap-[38px]">
          <a
            className="flex gap-2 no-underline m-s-b items-center"
            href={`tel:900000000`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`https://photos.staywuw.com/assets/icons/call/call-w.svg`}
              alt={`call icon`}
              width={17}
              height={18}
            />
            <span className="text-fs-12 ms:text-fs-14 text-white">
              {/* {languageData.navBar.contact} */}
              Contáctanos
            </span>
            <span className="m-b text-white">
              {/* {languageData.navigation.number} */}
              900000000
            </span>
          </a>

          {/* fix tailwind */}
          <div className="flex gap-[1rem] max-lg:gap-[10px]">
            <a
              href={`https://api.whatsapp.com/send?phone=900000&text=¡Hola!%20Necesito%20ayuda%20para%20planificar%20mi%20próximo%20viaje%20a%20México.%20¿Podrían%20orientarme%20sobre%20los%20mejores%20destinos%20y%20actividades%20que%20ofrecen?%20¡Espero%20su%20pronta%20respuesta!`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-4 h-4"
                src={`https://photos.staywuw.com/assets/icons/whats/whats-w.svg`}
                alt={` icon whatsapp`}
              />
            </a>

            <a
              href="https://www.facebook.com/staywhereuwant"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-4 h-4"
                src={`https://photos.staywuw.com/assets/icons/face/face-w.svg`}
                alt={` icon facebook`}
              />
            </a>

            <a
              href="https://www.instagram.com/stay.wuw/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-4 h-4"
                src={`https://photos.staywuw.com/assets/icons/insta/insta-w.svg`}
                alt={` icon instagram`}
              />
            </a>
            <a
              href="https://www.tiktok.com/@stay.wuw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-4 h-4"
                src={`https://photos.staywuw.com/assets/icons/tiktok/tiktok-w.svg`}
                alt={` icon tiktok`}
              />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
