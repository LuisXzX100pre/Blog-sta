

// import moment from "moment";


import {  useState } from "react";
import { Container } from "../general/Container";


const Hotels = {
  acapulco: {
    code: "1",
    codeName: "acapulco",
    destination: "Acapulco",
    codeNameHotel: "acapulco",
  },
  cancun: {
    code: "18",
    codeName: "cancun",
    destination: "Cancún",
    codeNameHotel: "cancun",
  },
  mazatlan: {
    code: "48",
    codeName: "mazatlan",
    destination: "Mazatlan",
    codeNameHotel: "mazatlan",
  },
  puertoVallarta: {
    code: "67",
    codeName: "puerto-vallarta",
    destination: "Puerto Vallarta",
    codeNameHotel: "puerto-vallarta",
  },
};

export default function FooterT() {
  // FALSE TO CHANGE TO THE WHITE FOOTER
  const footerBlue = true;

  // const [isOpen] = useState(true);
  const year = new Date().getFullYear();
  const [isHovered, setIsHovered] = useState(null);

  // const [positionOpen, setPositionOpen] = useState(0);

 

  // const handleAccordionClick = (open) => {
  //   if (positionOpen === open) {
  //     //CLICK ON THE OPEN QUESTION, CLOSE IT
  //     setPositionOpen(null);
  //   } else {
  //     setPositionOpen(open);
  //   }
  // };

  return (
    <footer className={`${footerBlue ? "bg-bl-100" : "bg-gry-50"}`}>
      <Container>
        <div
          className={`w-full flex flex-col justify-center items-center pt-[20px] pb-[40px] gap-[36px] max-md:px-[20px]`}
        >
          {/* LOGO */}
          <img
            src={`https://photos.staywuw.com/assets/${
              footerBlue
                ? "royal/principal-logo-blank.svg"
                : "royal/principal-logo.svg"
            }`}
            width={200}
            height={57.5}
            className="py-[46.2px]  select-none"
            alt="logo white footer"
          />

          <div className="flex justify-between w-full max-lg:flex-wrap max-sm:flex-col gap-y-[40px]">
            {/* CONTACT */}
            <div className="flex flex-col gap-[8px]">
              <span
                className={`${
                  footerBlue ? "text-white" : "text-black"
                } text-fs-16 m-s-b `}
              >
                {/* {languageData.footer.contact.titleContact} */}
                Contacto
              </span>

              {/* TEL */}
              <div className="flex gap-2">
                <a
                  className="flex cursor-pointer no-underline text-fs-12 gap-x-2.5"
                  href={`tel:`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setIsHovered("CTN")}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <img
                    src={`https://photos.staywuw.com/assets/icons/call/call-${
                      footerBlue
                        ? isHovered == "CTN"
                          ? "o.svg"
                          : "w.svg"
                        : isHovered == "CTN"
                        ? ""
                        : "b.svg"
                    }`}
                    alt="icon call footer"
                    width={20}
                    height={20}
                    className="w-[20px] h-[20px] select-none"
                  />
                  <span
                    className={`${footerBlue ? "text-white" : "text-black"} ${
                      isHovered === "CTN" && "!text-or-100"
                    } text-fs-12 m-s-b no-underline`}
                  >
                    {/* {languageData.navigation.number} */}
                    800 351 0426
                  </span>
                </a>
              </div>

              {/* EMAIL */}
              <a
                className="flex cursor-pointer no-underline text-fs-12 gap-x-2.5 w-max gap-2"
                target="_blank"
                href="mailto:info@staywuw.com"
                onMouseEnter={() => setIsHovered("EML")}
                onMouseLeave={() => setIsHovered(null)}
              >
                <img
                  src={`https://photos.staywuw.com/assets/icons/mail/mail-${
                    footerBlue
                      ? isHovered == "EML"
                        ? "o.svg"
                        : "w.svg"
                      : isHovered == "EML"
                      ? ""
                      : "b.svg"
                  }`}
                  alt="icon mail footer"
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px]  select-none"
                />
                <span
                  className={`${footerBlue ? "text-white" : "text-black"} ${
                    isHovered === "EML" && "!text-or-100"
                  } text-fs-12 m-s-b no-underline`}
                >
                  {/* {languageData.footer.contact.email} */
                  }
                  info@email.com
                </span>
              </a>

              {/* LOCATION */}
              <a
                className="flex cursor-pointer no-underline text-fs-12 gap-x-2.5 items-start w-full"
                href="https://www.google.com/maps/place/Atrium/@21.1421415,-86.8326047,392m/data=!3m2!1e3!5s0x8f4c2be696fbd3a3:0xc3e5e70f5d9b287a!4m10!1m2!2m1!1sPlaza+Atrium,+Oficina+405+y+406,+Canc%C3%BAn,+M%C3%A9xico,+Av.+Nichupt%C3%A9+Supermanzana+19+Lote+20-Manzana+2,+77505+Canc%C3%BAn,+Q.R!3m6!1s0x8f4c2be5c8de30c1:0xea21620824de0cd0!8m2!3d21.1429434!4d-86.8302659!15sCnZQbGF6YSBBdHJpdW0sIE9maWNpbmEgNDA1IHkgNDA2LCBDYW5jw7puLCBNw6l4aWNvLCBBdi4gTmljaHVwdMOpIFN1cGVybWFuemFuYSAxOSBMb3RlIDIwLU1hbnphbmEgMiwgNzc1MDUgQ2FuY8O6biwgUS5SWnAibnBsYXphIGF0cml1bSBvZmljaW5hIDQwNSB5IDQwNiBjYW5jw7puIG3DqXhpY28gYXYgbmljaHVwdMOpIHN1cGVybWFuemFuYSAxOSBsb3RlIDIwIG1hbnphbmEgMiA3NzUwNSBjYW5jw7puIHFykgEPc2hvcHBpbmdfY2VudGVymgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJXTjAwdGJVWjNFQUWqAfoBEAEqYSJdcGxhemEgYXRyaXVtIG9maWNpbmEgNDA1IHkgNDA2IGNhbmPDum4gbcOpeGljbyBhdiBuaWNodXB0w6kgc3VwZXJtYW56YW5hIDE5IGxvdGUgMjAgbWFuemFuYSAyKA4yHxABIhtDSWYlXq5YkaJnSsOObpYZU2wnJGOVGm8-57UychACIm5wbGF6YSBhdHJpdW0gb2ZpY2luYSA0MDUgeSA0MDYgY2FuY8O6biBtw6l4aWNvIGF2IG5pY2h1cHTDqSBzdXBlcm1hbnphbmEgMTkgbG90ZSAyMCBtYW56YW5hIDIgNzc1MDUgY2FuY8O6biBxcuABAPoBBAgAECY!16s%2Fg%2F1w9y2494?entry=ttu&g_ep=EgoyMDI1MDUxMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                onMouseEnter={() => setIsHovered("LCT")}
                onMouseLeave={() => setIsHovered(null)}
              >
                <img
                  src={`https://photos.staywuw.com/assets/icons/location/location-${
                    footerBlue
                      ? isHovered == "LCT"
                        ? "o.svg"
                        : "w.svg"
                      : isHovered == "LCT"
                      ? "b-o.svg"
                      : "b.svg"
                  }`}
                  alt="icon location footer"
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px] select-none"
                />
                <span
                  className={`${footerBlue ? "text-white" : "text-black"} ${
                    isHovered == "LCT" && "!text-or-100"
                  } text-fs-12 m-m w-[222px] no-underline max-md:w-[50%] max-sm:w-full`}
                >
                  {/* {languageData.footer.contact.location} */}
                  locations
                </span>
              </a>
            </div>

            {/* LINKS */}
            <div className="flex flex-col gap-[8px]">
              <span
                className={`${
                  footerBlue ? "text-white" : "text-black"
                } text-fs-16 m-s-b `}
              >
                {/* {languageData.footer.links} */}
                Enlaces
              </span>

              {/* HOME HOTELS */}
              <a
                // href={`/${language}/hotels`}
                className={`${
                  footerBlue ? "text-white" : "text-black"
                } text-fs-12 m-m hover:!text-or-100 no-underline w-fit`}
              >
                {/* {languageData.ourHistory.titleHotelService} */}
                Hoteles
              </a>

              {/* HOME TOUR */}
              <a
                // href={`/${language}/tours`}
                className={`${
                  footerBlue ? "text-white" : "text-black"
                } text-fs-12 m-m hover:!text-or-100 no-underline w-fit`}
              >
                {/* {languageData.itinerary.tourItinerary.titleTour} */}
                Tours
              </a>

              {/* HOME TRANSPORT */}
              
                <a
                  // href={`/${language}/transports`}
                  className={`${
                    footerBlue ? "text-white" : "text-black"
                  } text-fs-12 m-m hover:!text-or-100 no-underline w-fit`}
                >
                  {/* {languageData.modalMovingOptions.titleTransfer} */}
                  Transporte
                </a>
              {/* HOME BLOG */}
              <a
                // href={`/blog/${language}`}
                className={`${
                  footerBlue ? "text-white" : "text-black"
                } text-fs-12 m-m hover:!text-or-100 no-underline w-fit`}
              >
                Blog
              </a>
            </div>

            {/* ABOUT */}
            <div className="sm:hidden block">
              {/* <AboutMobile
                handleAccordionClick={handleAccordionClick}
                footerBlue={footerBlue}
                positionOpen={positionOpen}
              /> */}
            </div>

            <div className="hidden sm:block">
              {/* <AboutFooter footerBlue={footerBlue} /> */}
            </div>

            {/* MEXICO HOTELS */}
            <div className="sm:hidden block">
              {/* <MexicoHotelsFooterMobile
                handleAccordionClick={handleAccordionClick}
                footerBlue={footerBlue}
                positionOpen={positionOpen}
                sendHotel={sendHotel}
                Hotels={Hotels}
              /> */}
            </div>

            <div className="hidden sm:block">
              {/* <MexicoHotelsFooter
                footerBlue={footerBlue}
                sendHotel={sendHotel}
                Hotels={Hotels}
              /> */}
            </div>
            {/* END MEXICO HOTELS */}

            {/* FOLLOW US */}
            <div className="flex flex-col gap-[8px]">
              <span
                className={`${
                  footerBlue ? "text-white" : "text-black"
                } text-fs-16 m-s-b `}
              >
                {/* {languageData.footer.followUs} */}
                Síguenos
              </span>

              <div className="flex gap-[16px]">
                {/* WHATSAPP */}
                <a
                  className="flex cursor-pointer no-underline w-fit"
                  href={`https://api.whatsapp.com/send?phone=80000&text=¡Hola!%20Necesito%20ayuda%20para%20planificar%20mi%20próximo%20viaje%20a%20México.%20¿Podrían%20orientarme%20sobre%20los%20mejores%20destinos%20y%20actividades%20que%20ofrecen?%20¡Espero%20su%20pronta%20respuesta!`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`https://photos.staywuw.com/assets/icons/whats/whats-${
                      footerBlue ? "w.svg" : "b.svg"
                    }`}
                    alt="icon whats footer"
                    width={20}
                    height={20}
                    className=" select-none"
                  />
                </a>

                {/* FACEBOOK */}
                <a
                  className="flex cursor-pointer no-underline w-fit"
                  href="https://www.facebook.com/staywhereuwant"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`https://photos.staywuw.com/assets/icons/face/face-${
                      footerBlue ? "w.svg" : "b.svg"
                    }`}
                    alt="icon face footer"
                    width={20}
                    height={20}
                    className=" select-none"
                  />
                </a>

                {/* INSTAGRAM */}
                <a
                  className="flex cursor-pointer no-underline w-fit"
                  href="https://www.instagram.com/stay.wuw/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`https://photos.staywuw.com/assets/icons/insta/insta-${
                      footerBlue ? "w.svg" : "b.svg"
                    }`}
                    alt="icon instagram footer"
                    width={20}
                    height={20}
                    className=" select-none"
                  />
                </a>
                {/* TIKTOK */}
                <a
                  className="flex cursor-pointer no-underline w-fit"
                  href="https://www.tiktok.com/@stay.wuw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`https://photos.staywuw.com/assets/icons/tiktok/tiktok-${
                      footerBlue ? "w.svg" : "b.svg"
                    }`}
                    alt="icon tiktok footer"
                    width={20}
                    height={20}
                    className=" select-none"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-end w-[99%] pt-[36px] border-t border-[#d1d2d5] max-md:gap-[40px] max-md:flex-col max-md:items-start">
            {/* ACCEPT CREDIT CARD */}
            <div className="flex flex-col gap-[8px]">
              <span
                className={`${
                  footerBlue ? "text-white" : "text-black"
                } text-fs-12 m-s-b mx-1`}
              >
                {/* {languageData.footer.acceptCreditCards} */}
                Aceptamos tarjetas de crédito
              </span>

              <div className="flex">
                {/* {creditsCard.map((card, index) => (
                  <img
                    key={index}
                    className="mx-1  select-none"
                    src={`${process.env.NEXT_PUBLIC_URL}${card.image}`}
                    alt={card.alt}
                    width="45px"
                    height="100%"
                  />
                ))} */}
              </div>
            </div>

            {/* COPYRIGHT */}
            <div
              className={`${
                footerBlue ? "text-white" : "text-black"
              } text-fs-12 m-m`}
            >
              {" "}
              Copyright © {year}{" "}
               StayWuw Todos los derechos reservados.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
