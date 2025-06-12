import Link from "next/link";
import { useContext } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

import LanguageContext from "@/language/LanguageContext";

export function AboutMobile({
  handleAccordionClick,
  footerBlue,
  positionOpen,
}) {
  const { languageData, language } = useContext(LanguageContext);

  return (
    <div className="flex flex-col">
      <Disclosure>
        <>
          <Disclosure.Button
            onClick={() => handleAccordionClick(0)}
            className="flex w-full gap-[15px] max-sm:justify-between rounded-lg text-left text-sm font-medium focus:outline-none"
          >
            <span
              className={`${
                footerBlue ? "text-white" : "text-black"
              } text-fs-16 m-s-b `}
            >
              {languageData.footer.about.titleAbout}
            </span>
            <ChevronUpIcon
              className={`${
                positionOpen === 0 ? "" : "rotate-180 transform"
              } h-5 w-5  md:hidden ${
                footerBlue ? "text-white" : "text-black"
              } `}
            />
          </Disclosure.Button>

          {positionOpen === 0 && (
            <div className="pb-2 pt-2 text-sm text-gray-500">
              <div className="flex flex-col gap-[8px]">
                {/* OUR HISTORY */}
                <Link
                  href={`/${language}/history`}
                  className={`${
                    footerBlue ? "text-white" : "text-black"
                  } text-fs-12 m-m hover:!text-or-100 no-underline w-fit`}
                >
                  {languageData.footer.about.titleHistory}
                </Link>

                {/* FAQS */}
                <Link
                  href={`/${language}/faqs`}
                  className={`${
                    footerBlue ? "text-white" : "text-black"
                  } text-fs-12 m-m hover:!text-or-100 no-underline w-fit`}
                >
                  {languageData.footer.about.titleQuestions}
                </Link>

                {/* TYC */}
                <Link
                  href={`/${language}/tyc`}
                  className={`${
                    footerBlue ? "text-white" : "text-black"
                  } text-fs-12 m-m hover:!text-or-100 no-underline w-fit`}
                >
                  {languageData.footer.about.titleConditions}
                </Link>

                {/* PRIVACY POLICY */}
                <Link
                  href={`/${language}/privacy`}
                  className={`${
                    footerBlue ? "text-white" : "text-black"
                  } text-fs-12 m-m hover:!text-or-100 no-underline w-fit`}
                >
                  {languageData.footer.about.titlePrivacy}
                </Link>
              </div>
            </div>
          )}
        </>
      </Disclosure>
    </div>
    // {/*END ABOUT */}
  );
}

export function AboutFooter({ footerBlue }) {
  const { languageData, language } = useContext(LanguageContext);
  return (
    <div className="flex flex-col">
      <>
        <div className="flex w-full gap-[15px] max-sm:justify-between rounded-lg text-left text-sm font-medium focus:outline-none">
          <span
            className={`${
              footerBlue ? "text-white" : "text-black"
            } text-fs-16 m-s-b `}
          >
            {languageData.footer.about.titleAbout}
          </span>
        </div>

        <div className="pb-2 pt-2 text-sm text-gray-500">
          <div className="flex flex-col gap-[8px]">
            {/* OUR HISTORY */}
            <Link
              href={`/${language}/history`}
              className={`${
                footerBlue ? "text-white" : "text-black"
              } text-fs-12 m-m hover:!text-or-100 no-underline w-fit`}
            >
              {languageData.footer.about.titleHistory}
            </Link>

            {/* FAQS */}
            <Link
              href={`/${language}/faqs`}
              className={`${
                footerBlue ? "text-white" : "text-black"
              } text-fs-12 m-m hover:!text-or-100 no-underline w-fit`}
            >
              {languageData.footer.about.titleQuestions}
            </Link>

            {/* TYC */}
            <Link
              href={`/${language}/tyc`}
              className={`${
                footerBlue ? "text-white" : "text-black"
              } text-fs-12 m-m hover:!text-or-100 no-underline w-fit`}
            >
              {languageData.footer.about.titleConditions}
            </Link>

            {/* PRIVACY POLICY */}
            <Link
              href={`/${language}/privacy`}
              className={`${
                footerBlue ? "text-white" : "text-black"
              } text-fs-12 m-m hover:!text-or-100 no-underline w-fit`}
            >
              {languageData.footer.about.titlePrivacy}
            </Link>
          </div>
        </div>
      </>
    </div>
  );
}
