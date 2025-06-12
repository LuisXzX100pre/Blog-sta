"use client";

import Link from "next/link";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect, useState } from "react";

import { SelectCurrency } from "./SelectCurrency";
import LanguageContext from "@/language/LanguageContext";
import { LanguageSelector } from "@/language/LanguageSelector";
import { NavigationConfig } from "@/config/Navigation/NavigationConfig";

export function HamburgerMenu({ open, setMobileMenuOpen }) {
  const [currentActiveIcon, setCurrentActiveIcon] = useState(null);

  const { languageData, language } = useContext(LanguageContext);
  // GET ACTIVITY SERVICE
  const routerActual = NavigationConfig();

  useEffect(() => {
    setCurrentActiveIcon(routerActual);
  }, [routerActual]);

  // LP RELOAD HOME
  const changeHome = () => {
    window.open(`/`, "_self");
  };
  const changeBlog = () => {
    window.open(`/blog/${language}`, "_self");
  };
  const changeHotels = () => {
    window.open(`/${language}/hotels`, "_self");
  };
  const changeTour = () => {
    window.open(`/${language}/tours`, "_self");
  };
  const changeTransport = () => {
    window.open(`/${language}/transports`, "_self");
  };
  // LP END

  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={open}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="flex gap-x-4 mt-4 py-6">
              {/* BLOG LINK */}
            <div
              className="flex items-center text-gry-100 m-b hover:text-or-100 no-underline cursor-pointer"
              onClick={() => {
                changeBlog();
              }}
            >
              <img
                src={`${process.env.NEXT_PUBLIC_URL}icons/general/globe-${
                  currentActiveIcon === "blog" ? "o.svg" : "b.svg"
                }`}
                alt="icon blog"
                className="pr-2 pb-1"
              />
              <span
                className={`${
                  currentActiveIcon === "blog" ? "text-or-100" : ""
                }`}
              >
                Blog
              </span>
            </div>
              <SelectCurrency />

              <LanguageSelector />
            </div>

            <div className="space-y-7 py-6">
              {/* HOME LINK */}
              <div
                  className="flex items-center text-gry-100 m-b hover:text-or-100 no-underline cursor-pointer"
                  onClick={() => {
                    changeHome();
                  }}
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_URL}icons/general/home-${
                      currentActiveIcon === "home"
                        ? "o.svg"
                        : "b.svg"
                    }`}
                    alt="icon hotel"
                    className="pr-2 pb-1"
                  />
                  <span
                    className={`${
                      currentActiveIcon === "home"
                        ? "text-or-100"
                        : ""
                    }`}
                  >
                    {/* {languageData.SearchBox.tabHotel.hotel} */}
                    Home
                  </span>
                </div>

              {/* HOTEL LINK */}
              <div
                onClick={() => {
                  changeHotels();
                }}
                className="flex items-center pr-4 text-gry-100 m-b hover:text-or-100 no-underline"
              >
                {/* <Link
                  href={`/${language}/hotels`}
                  // href={`${process.env.NEXT_PUBLIC_HOME}`}
                  passHref
                  className="flex items-center pr-4 text-gry-100 m-b hover:text-or-100 no-underline	"
                > */}{" "}
                <img
                  // src={`${process.env.NEXT_PUBLIC_URL}icons/hotel/hotel-b.svg`}
                  src={`${process.env.NEXT_PUBLIC_URL}icons/hotel/hotel-${
                    currentActiveIcon === "hotels" ||
                    currentActiveIcon === "hotel"
                      ? "o.svg"
                      : "b.svg"
                  }`}
                  alt="hotel-menu"
                  className="pr-2"
                />
                <span
                  className={`${
                    currentActiveIcon === "hotels" && "text-or-100"
                  }`}
                >
                  {languageData.SearchBox.tabHotel.hotel}
                </span>
                {/* </Link> */}
              </div>

              {/* TOUR LINK */}
              <div
                onClick={() => {
                  changeTour();
                }}
                className="flex items-center pr-4 text-gry-100 m-b hover:text-or-100 no-underline"
              >
                {/* <Link
                  href={`/${language}/tours`}
                  passHref
                  className="flex items-center pr-4 text-gry-100 m-b hover:text-or-100 no-underline	"
                > */}
                <img
                  // src={`${process.env.NEXT_PUBLIC_URL}icons/tour/tour-b.svg`}
                  src={`${process.env.NEXT_PUBLIC_URL}icons/tour/tour-${
                    currentActiveIcon === "tours" ||
                    currentActiveIcon === "tour"
                      ? "o.svg"
                      : "b.svg"
                  }`}
                  alt="tour-menu"
                  className="pr-2"
                />
                <span
                  className={`${
                    currentActiveIcon === "tours" ||
                    currentActiveIcon === "tour"
                      ? "text-or-100"
                      : ""
                  }`}
                >
                  Tours
                </span>
                {/* </Link> */}
              </div>

              {/* TRANSPORT LINK */}
              <div
                onClick={() => {
                  changeTransport();
                }}
                className="flex items-center pr-4 text-gry-100 m-b hover:text-or-100 no-underline hidden"
              >
                {/* <Link
                  href={`/${language}/transports`}
                  passHref
                  className="flex items-center pr-4 text-gry-100 m-b hover:text-or-100 no-underline	"
                > */}
                <img
                  // src={`${process.env.NEXT_PUBLIC_URL}icons/transport/transport-b.svg`}
                  src={`${
                    process.env.NEXT_PUBLIC_URL
                  }icons/transport/transport-${
                    currentActiveIcon === "transports" ||
                    currentActiveIcon === "transport"
                      ? "o.svg"
                      : "b.svg"
                  }`}
                  alt="transport-menu"
                  className="pr-2"
                  width="32px"
                  height="23px"
                />
                <span
                  className={`${
                    currentActiveIcon === "transports" ||
                    currentActiveIcon === "transport"
                      ? "text-or-100"
                      : ""
                  }`}
                >
                  {languageData.modalHotelOptions.titleTransfer}
                </span>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
