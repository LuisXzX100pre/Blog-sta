"use client"

import { useState } from "react"
import { Container } from "../general/container"

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
}

const creditsCard = [
  { image: "visa.svg", alt: "Visa" },
  { image: "mastercard.svg", alt: "Mastercard" },
  { image: "amex.svg", alt: "American Express" },
  { image: "paypal.svg", alt: "PayPal" },
]

export default function FooterT() {
  // FALSE TO CHANGE TO THE WHITE FOOTER
  const footerBlue = true
  const year = new Date().getFullYear()
  const [isHovered, setIsHovered] = useState(null)
  const [positionOpen, setPositionOpen] = useState(0) // ✅ Descomentado
  const language = "es" // ✅ Agregado

  const sendHotel = (hotelInfo) => {
    // Función simplificada para evitar dependencia de moment
    const today = new Date()
    const initDate = new Date(today)
    initDate.setMonth(today.getMonth() + 1)
    const endDate = new Date(initDate)
    endDate.setDate(initDate.getDate() + 2)

    const checkIn = initDate.toISOString().split("T")[0]
    const checkOut = endDate.toISOString().split("T")[0]

    const encodedRoomData = encodeURIComponent(JSON.stringify([{ adults: 2, children: [] }]))

    const requestBody = {
      codeNameHotel: hotelInfo.codeName,
      destination: hotelInfo.destination,
      codeName: hotelInfo.codeName,
      code: hotelInfo.code,
      type: "destination",
      "check-in": checkIn,
      "check-out": checkOut,
      occupancies: encodedRoomData,
    }

    const query = new URLSearchParams(requestBody).toString()
    return `/${language}/mx/${hotelInfo.codeName}/hotels?${query}`
  }

  const handleAccordionClick = (open) => {
    if (positionOpen === open) {
      //CLICK ON THE OPEN QUESTION, CLOSE IT
      setPositionOpen(null)
    } else {
      setPositionOpen(open)
    }
  }

  // Componente AboutFooter simplificado
  const AboutFooter = ({ footerBlue }) => (
    <div className="flex flex-col gap-[8px]">
      <span className={`${footerBlue ? "text-white" : "text-black"} text-fs-16 m-s-b`}>Acerca de</span>
      <a className={`${footerBlue ? "text-white" : "text-black"} text-fs-12 m-m hover:!text-or-100 no-underline w-fit`}>
        Quiénes somos
      </a>
      <a className={`${footerBlue ? "text-white" : "text-black"} text-fs-12 m-m hover:!text-or-100 no-underline w-fit`}>
        Términos y condiciones
      </a>
      <a className={`${footerBlue ? "text-white" : "text-black"} text-fs-12 m-m hover:!text-or-100 no-underline w-fit`}>
        Política de privacidad
      </a>
    </div>
  )

  // Componente AboutMobile simplificado
  const AboutMobile = ({ handleAccordionClick, footerBlue, positionOpen }) => (
    <div className="flex flex-col gap-[8px]">
      <button
        onClick={() => handleAccordionClick(1)}
        className={`${footerBlue ? "text-white" : "text-black"} text-fs-16 m-s-b text-left`}
      >
        Acerca de {positionOpen === 1 ? "−" : "+"}
      </button>
      {positionOpen === 1 && (
        <div className="flex flex-col gap-2">
          <a
            className={`${footerBlue ? "text-white" : "text-black"} text-fs-12 m-m hover:!text-or-100 no-underline w-fit`}
          >
            Quiénes somos
          </a>
          <a
            className={`${footerBlue ? "text-white" : "text-black"} text-fs-12 m-m hover:!text-or-100 no-underline w-fit`}
          >
            Términos y condiciones
          </a>
        </div>
      )}
    </div>
  )

  // Componente MexicoHotelsFooter simplificado
  const MexicoHotelsFooter = ({ footerBlue, sendHotel, Hotels }) => (
    <div className="flex flex-col gap-[8px]">
      <span className={`${footerBlue ? "text-white" : "text-black"} text-fs-16 m-s-b`}>Hoteles en México</span>
      {Object.values(Hotels).map((hotel) => (
        <a
          key={hotel.code}
          href={sendHotel(hotel)}
          className={`${footerBlue ? "text-white" : "text-black"} text-fs-12 m-m hover:!text-or-100 no-underline w-fit`}
        >
          {hotel.destination}
        </a>
      ))}
    </div>
  )

  // Componente MexicoHotelsFooterMobile simplificado
  const MexicoHotelsFooterMobile = ({ handleAccordionClick, footerBlue, positionOpen, sendHotel, Hotels }) => (
    <div className="flex flex-col gap-[8px]">
      <button
        onClick={() => handleAccordionClick(2)}
        className={`${footerBlue ? "text-white" : "text-black"} text-fs-16 m-s-b text-left`}
      >
        Hoteles en México {positionOpen === 2 ? "−" : "+"}
      </button>
      {positionOpen === 2 && (
        <div className="flex flex-col gap-2">
          {Object.values(Hotels).map((hotel) => (
            <a
              key={hotel.code}
              href={sendHotel(hotel)}
              className={`${footerBlue ? "text-white" : "text-black"} text-fs-12 m-m hover:!text-or-100 no-underline w-fit`}
            >
              {hotel.destination}
            </a>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <footer className={`${footerBlue ? "bg-bl-100" : "bg-gry-50"}`}>
      <Container>
        <div
          className={`w-full flex flex-col justify-center items-center pt-[20px] pb-[40px] gap-[36px] max-md:px-[20px]`}
        >
          {/* LOGO */}
          <img
            src={`https://photos.staywuw.com/assets/royal/${footerBlue ? "principal-logo-blank.svg" : "principal-logo.svg"}`}
            width={200}
            height={57.5}
            className="py-[46.2px] select-none"
            alt="logo white footer"
          />
          <div className="flex justify-between w-full max-lg:flex-wrap max-sm:flex-col gap-y-[40px]">
            {/* CONTACT */}
            <div className="flex flex-col gap-[8px]">
              <span className={`${footerBlue ? "text-white" : "text-black"} text-fs-16 m-s-b`}>Contacto</span>
              {/* TEL */}
              <div className="flex gap-2">
                <a
                  className="flex cursor-pointer no-underline text-fs-12 gap-x-2.5"
                  href={`tel:8003510426`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setIsHovered("CTN")}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <img
                    src={`https://photos.staywuw.com/assets/icons/call/call-${footerBlue ? (isHovered == "CTN" ? "o.svg" : "w.svg") : isHovered == "CTN" ? "o.svg" : "b.svg"}`}
                    alt="icon call footer"
                    width={20}
                    height={20}
                    className="w-[20px] h-[20px] select-none"
                  />
                  <span
                    className={`${footerBlue ? "text-white" : "text-black"} ${isHovered === "CTN" && "!text-or-100"} text-fs-12 m-s-b no-underline`}
                  >
                    800 351 0426
                  </span>
                </a>
              </div>
              {/* EMAIL */}
              <a
                className="flex cursor-pointer no-underline text-fs-12 gap-x-2.5 w-max gap-2"
                target="_blank"
                href="mailto:info@royalvacations.com"
                onMouseEnter={() => setIsHovered("EML")}
                onMouseLeave={() => setIsHovered(null)}
                rel="noreferrer"
              >
                <img
                  src={`https://photos.staywuw.com/assets/icons/mail/mail-${footerBlue ? (isHovered == "EML" ? "o.svg" : "w.svg") : isHovered == "EML" ? "o.svg" : "b.svg"}`}
                  alt="icon mail footer"
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px] select-none"
                />
                <span
                  className={`${footerBlue ? "text-white" : "text-black"} ${isHovered === "EML" && "!text-or-100"} text-fs-12 m-s-b no-underline`}
                >
                  info@royalvacations.com
                </span>
              </a>
              {/* LOCATION */}
              <a
                className="flex cursor-pointer no-underline text-fs-12 gap-x-2.5 items-start w-full"
                href="https://www.google.com/maps"
                onMouseEnter={() => setIsHovered("LCT")}
                onMouseLeave={() => setIsHovered(null)}
              >
                <img
                  src={`https://photos.staywuw.com/assets/icons/location/location-${footerBlue ? (isHovered == "LCT" ? "o.svg" : "w.svg") : isHovered == "LCT" ? "o.svg" : "b.svg"}`}
                  alt="icon location footer"
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px] select-none"
                />
                <span
                  className={`${footerBlue ? "text-white" : "text-black"} ${isHovered == "LCT" && "!text-or-100"} text-fs-12 m-m w-[222px] no-underline max-md:w-[50%] max-sm:w-full`}
                >
                  Cancún, México
                </span>
              </a>
            </div>

            {/* LINKS */}
            <div className="flex flex-col gap-[8px]">
              <span className={`${footerBlue ? "text-white" : "text-black"} text-fs-16 m-s-b`}>Enlaces</span>
              <a
                className={`${footerBlue ? "text-white" : "text-black"} text-fs-12 m-m hover:!text-or-100 no-underline w-fit`}
              >
                Hoteles
              </a>
              <a
                className={`${footerBlue ? "text-white" : "text-black"} text-fs-12 m-m hover:!text-or-100 no-underline w-fit`}
              >
                Tours
              </a>
              <a
                className={`${footerBlue ? "text-white" : "text-black"} text-fs-12 m-m hover:!text-or-100 no-underline w-fit`}
              >
                Transporte
              </a>
              <a
                className={`${footerBlue ? "text-white" : "text-black"} text-fs-12 m-m hover:!text-or-100 no-underline w-fit`}
              >
                Blog
              </a>
            </div>

            {/* ABOUT */}
            <div className="sm:hidden block">
              <AboutMobile
                handleAccordionClick={handleAccordionClick}
                footerBlue={footerBlue}
                positionOpen={positionOpen}
              />
            </div>
            <div className="hidden sm:block">
              <AboutFooter footerBlue={footerBlue} />
            </div>

            {/* MEXICO HOTELS */}
            <div className="sm:hidden block">
              <MexicoHotelsFooterMobile
                handleAccordionClick={handleAccordionClick}
                footerBlue={footerBlue}
                positionOpen={positionOpen}
                sendHotel={sendHotel}
                Hotels={Hotels}
              />
            </div>
            <div className="hidden sm:block">
              <MexicoHotelsFooter footerBlue={footerBlue} sendHotel={sendHotel} Hotels={Hotels} />
            </div>

            {/* FOLLOW US */}
            <div className="flex flex-col gap-[8px]">
              <span className={`${footerBlue ? "text-white" : "text-black"} text-fs-16 m-s-b`}>Síguenos</span>
              <div className="flex gap-[16px]">
                {/* WHATSAPP */}
                <a
                  className="flex cursor-pointer no-underline w-fit"
                  href={`https://api.whatsapp.com/send?phone=80000&text=¡Hola!%20Necesito%20ayuda%20para%20planificar%20mi%20próximo%20viaje%20a%20México.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`https://photos.staywuw.com/assets/icons/whats/whats-${footerBlue ? "w.svg" : "b.svg"}`}
                    alt="icon whats footer"
                    width={20}
                    height={20}
                    className="select-none"
                  />
                </a>
                {/* FACEBOOK */}
                <a
                  className="flex cursor-pointer no-underline w-fit"
                  href="https://www.facebook.com/royalvacations"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`https://photos.staywuw.com/assets/icons/face/face-${footerBlue ? "w.svg" : "b.svg"}`}
                    alt="icon face footer"
                    width={20}
                    height={20}
                    className="select-none"
                  />
                </a>
                {/* INSTAGRAM */}
                <a
                  className="flex cursor-pointer no-underline w-fit"
                  href="https://www.instagram.com/royalvacations/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`https://photos.staywuw.com/assets/icons/insta/insta-${footerBlue ? "w.svg" : "b.svg"}`}
                    alt="icon instagram footer"
                    width={20}
                    height={20}
                    className="select-none"
                  />
                </a>
                {/* TIKTOK */}
                <a
                  className="flex cursor-pointer no-underline w-fit"
                  href="https://www.tiktok.com/@royalvacations"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`https://photos.staywuw.com/assets/icons/tiktok/tiktok-${footerBlue ? "w.svg" : "b.svg"}`}
                    alt="icon tiktok footer"
                    width={20}
                    height={20}
                    className="select-none"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-end w-[99%] pt-[36px] border-t border-[#d1d2d5] max-md:gap-[40px] max-md:flex-col max-md:items-start">
            {/* ACCEPT CREDIT CARD */}
            <div className="flex flex-col gap-[8px]">
              <span className={`${footerBlue ? "text-white" : "text-black"} text-fs-12 m-s-b mx-1`}>
                Aceptamos tarjetas de crédito
              </span>
              <div className="flex">
                {creditsCard.map((card, index) => (
                  <img
                    key={index}
                    className="mx-1 select-none"
                    src={`https://photos.staywuw.com/assets/icons/payment/${card.image}`}
                    alt={card.alt}
                    width="45px"
                    height="100%"
                  />
                ))}
              </div>
            </div>
            {/* COPYRIGHT */}
            <div className={`${footerBlue ? "text-white" : "text-black"} text-fs-12 m-m`}>
              Copyright © {year} Royal Vacations Todos los derechos reservados.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
