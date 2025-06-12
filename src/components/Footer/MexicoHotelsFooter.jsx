import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Disclosure } from "@headlessui/react";
import { useContext } from "react";
import LanguageContext from "@/language/LanguageContext";
import Link from "next/link";

export function MexicoHotelsFooterMobile({
  handleAccordionClick,
  footerBlue,
  positionOpen,
  sendHotel,
  Hotels,
}) {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col" >
      <Disclosure>
        <>
          <Disclosure.Button onClick={() => handleAccordionClick(1)} className="flex w-full gap-[15px] max-sm:justify-between rounded-lg text-left text-sm font-medium focus:outline-none">
            <span
              className={`${
                footerBlue ? "text-white" : "text-black"
              } text-fs-16 m-s-b `}
            >
              {languageData.footer.hotelsMexico.titleHotel}
            </span>
            <ChevronUpIcon
              className={`${
                positionOpen === 1 ? "" : "rotate-180 transform"
              } h-5 w-5 md:hidden ${footerBlue ? "text-white" : "text-black"}`}
            />
          </Disclosure.Button>

          {positionOpen === 1 && (
            <div className="pb-2 pt-2 text-sm text-gray-500">
              <div className="flex flex-col gap-[8px]">
                {/* HOTELS CANCUN */}
                <Link
                  href={sendHotel(Hotels.cancun)}
                  className={`${
                    footerBlue ? "text-white" : "text-black"
                  } text-fs-12 m-m hover:!text-or-100 no-underline cursor-pointer w-fit`}
                >
                  {languageData.footer.hotelsMexico.hotelCancun}
                </Link>

                {/* HOTELS MAZATLAN */}
                <Link
                  href={sendHotel(Hotels.mazatlan)}
                  className={`${
                    footerBlue ? "text-white" : "text-black"
                  } text-fs-12 m-m hover:!text-or-100 no-underline cursor-pointer w-fit`}
                >
                  {languageData.footer.hotelsMexico.hotelMazatlan}
                </Link>

                {/* HOTELS ACAPULCO */}
                <Link
                  href={sendHotel(Hotels.acapulco)}
                  className={`${
                    footerBlue ? "text-white" : "text-black"
                  } text-fs-12 m-m hover:!text-or-100 no-underline cursor-pointer w-fit`}
                >
                  {languageData.footer.hotelsMexico.hotelAcapulco}
                </Link>

                {/* HOTELS PUERTO VALLARTA */}
                <Link
                  href={sendHotel(Hotels.puertoVallarta)}
                  className={`${
                    footerBlue ? "text-white" : "text-black"
                  } text-fs-12 m-m hover:!text-or-100 no-underline cursor-pointer w-fit`}
                >
                  {languageData.footer.hotelsMexico.hotelPuertoVallarta}
                </Link>
              </div>
            </div>
          )}
        </>
      </Disclosure>
    </div>
  );
}
export function MexicoHotelsFooter({ footerBlue, sendHotel, Hotels }) {
  const { languageData } = useContext(LanguageContext);
  return (
    <div className="flex flex-col">
      <>
        <div className="flex w-full gap-[15px] max-sm:justify-between rounded-lg text-left text-sm font-medium focus:outline-none">
          <span
            className={`${
              footerBlue ? "text-white" : "text-black"
            } text-fs-16 m-s-b `}
          >
            {languageData.footer.hotelsMexico.titleHotel}
          </span>
        </div>

        <div className="pb-2 pt-2 text-sm text-gray-500">
          <div className="flex flex-col gap-[8px]">
            {/* HOTELS CANCUN */}
            <Link
              href={sendHotel(Hotels.cancun)}
              className={`${
                footerBlue ? "text-white" : "text-black"
              } text-fs-12 m-m hover:!text-or-100 no-underline cursor-pointer w-fit`}
            >
              {languageData.footer.hotelsMexico.hotelCancun}
            </Link>

            {/* HOTELS MAZATLAN */}
            <Link
              href={sendHotel(Hotels.mazatlan)}
              className={`${
                footerBlue ? "text-white" : "text-black"
              } text-fs-12 m-m hover:!text-or-100 no-underline cursor-pointer w-fit`}
            >
              {languageData.footer.hotelsMexico.hotelMazatlan}
            </Link>

            {/* HOTELS ACAPULCO */}
            <Link
              href={sendHotel(Hotels.acapulco)}
              className={`${
                footerBlue ? "text-white" : "text-black"
              } text-fs-12 m-m hover:!text-or-100 no-underline cursor-pointer w-fit`}
            >
              {languageData.footer.hotelsMexico.hotelAcapulco}
            </Link>

            {/* HOTELS PUERTO VALLARTA */}
            <Link
              href={sendHotel(Hotels.puertoVallarta)}
              className={`${
                footerBlue ? "text-white" : "text-black"
              } text-fs-12 m-m hover:!text-or-100 no-underline cursor-pointer w-fit`}
            >
              {languageData.footer.hotelsMexico.hotelPuertoVallarta}
            </Link>
          </div>
        </div>
      </>
    </div>
  );
}
