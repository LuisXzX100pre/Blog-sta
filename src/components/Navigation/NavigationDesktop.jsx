"use client"

import { Container } from "../general/container"
import { useLanguage } from "../../context/LanguageContext"
import { useRouter } from "next/navigation"
import { SelectCurrency } from "../Navigation/SelectCurrency"
import { LanguageSelector } from "../Navigation/LanguageSelector"

export default function NavigationDesktop() {
  const { lang } = useLanguage()
  const router = useRouter()

  const navigateTo = (path) => {
    // For root path, navigate to language-specific root
    if (path === "/") {
      router.push(`/${lang}`)
    } else {
      router.push(`/${lang}${path}`)
    }
  }

  return (
    <div className="relative max-lg:top-[-10px] md:top-[-22px] mt-[38px] lg:mt-0 max-sm:mt-[20px]">
      <Container>
        <header className="relative pt-0 pb-[20px] flex flex-col gap-y-[12px] max-sm:pb-0">
          <div className="hidden lg:flex justify-end items-center">
            <div
              className="flex items-center text-gry-100 m-b hover:text-or-100 no-underline cursor-pointer"
              onClick={() => navigateTo("/blog")}
            >
              <img
                src={`https://photos.staywuw.com/assets/icons/general/globe-b.svg`}
                alt="icon blog"
                className="pr-2 pb-1"
              />
              <span>Blog</span>
            </div>
            <span className="pl-[10px] pr-[10px]">|</span>
            <SelectCurrency />
            <span className="pl-[10px] pr-[10px]">|</span>
            <LanguageSelector />
          </div>

          <nav className="flex w-full items-center justify-between " aria-label="Global">
            <div className="flex lg:flex-1 justify-between">
              <div className="m-1.5 cursor-pointer w-fit" onClick={() => navigateTo("/")}>
                <img
                  src={`https://photos.staywuw.com/assets/royal/principal-logo.svg`}
                  alt={` logo`}
                  width={200}
                  height={100}
                  className="max-sm:w-[140px] max-sm:h-[40px] select-none"
                />
              </div>

              <div className="hidden lg:items-center lg:flex lg:gap-x-7">
                <div
                  className="flex items-center text-gry-100 m-b hover:text-or-100 no-underline cursor-pointer"
                  onClick={() => navigateTo("/")}
                >
                  <img
                    src={`https://photos.staywuw.com/assets/icons/general/home-b.svg`}
                    alt="icon hotel"
                    className="pr-2 pb-1"
                  />
                  <span>Home</span>
                </div>

                <div
                  className="flex items-center text-gry-100 m-b hover:text-or-100 no-underline cursor-pointer"
                  onClick={() => navigateTo("/hotels")}
                >
                  <img
                    src={`https://photos.staywuw.com/assets/icons/hotel/hotel-b.svg`}
                    alt="icon hotel"
                    className="pr-2"
                  />
                  <span>Hotel</span>
                </div>

                <div
                  className="flex items-center text-gry-100 m-b hover:text-or-100 no-underline cursor-pointer"
                  onClick={() => navigateTo("/tours")}
                >
                  <img
                    src={`https://photos.staywuw.com/assets/icons/tour/tour-b.svg`}
                    alt="icon tour"
                    className="pr-2"
                  />
                  <span>Tours</span>
                </div>
                <div
                  className="flex items-center text-gry-100 m-b hover:text-or-100 no-underline cursor-pointer"
                  onClick={() => navigateTo("/transports")}
                >
                  <img
                    src={`https://photos.staywuw.com/assets/icons/transport/transport-b.svg`}
                    alt="icon transport"
                    className="pr-2"
                  />
                  <span>Transporte</span>
                </div>
              </div>
            </div>

            <div className="flex gap-x-[18px] lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <div className="flex flex-col gap-y-[3px]">
                  <span className="rounded-lg bg-or-100 w-[16px] h-[3px]" />
                  <span className="rounded-lg bg-or-100 w-[16px] h-[3px]" />
                  <span className="rounded-lg bg-or-100 w-[16px] h-[3px]" />
                </div>
              </button>
            </div>
          </nav>
        </header>
      </Container>
    </div>
  )
}
