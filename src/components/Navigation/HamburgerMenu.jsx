"use client"

import { Dialog } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"

import { SelectCurrency } from "./select-currency"
import { useLanguage } from "../../context/LanguageContext"
import { LanguageSelector } from "./language-selector"

const ASSETS_URL = "https://photos.staywuw.com/assets/"

export function HamburgerMenu({ open, setMobileMenuOpen }) {
  const { lang } = useLanguage()
  const pathname = usePathname()
  const router = useRouter()

  const [currentActiveIcon, setCurrentActiveIcon] = useState(null)

  useEffect(() => {
    const path = pathname.split("/")[2]
    if (["hotels", "tours", "transports"].includes(path)) {
      setCurrentActiveIcon(path)
    } else if (pathname.includes("/blog")) {
      setCurrentActiveIcon("blog")
    } else {
      setCurrentActiveIcon("home")
    }
  }, [pathname])

  const navigateTo = (path) => {
    router.push(path)
    setMobileMenuOpen(false)
  }

  return (
    <Dialog as="div" className="lg:hidden" open={open} onClose={() => setMobileMenuOpen(false)}>
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
              <div
                className="flex items-center text-gry-100 m-b hover:text-or-100 no-underline cursor-pointer"
                onClick={() => navigateTo(`/blog/${lang}`)}
              >
                <img
                  src={`${ASSETS_URL}icons/general/globe-${currentActiveIcon === "blog" ? "o.svg" : "b.svg"}`}
                  alt="icon blog"
                  className="pr-2 pb-1"
                />
                <span className={`${currentActiveIcon === "blog" ? "text-or-100" : ""}`}>Blog</span>
              </div>
              <SelectCurrency />
              <LanguageSelector />
            </div>

            <div className="space-y-7 py-6">
              <div
                className="flex items-center text-gry-100 m-b hover:text-or-100 no-underline cursor-pointer"
                onClick={() => navigateTo(`/${lang}`)}
              >
                <img
                  src={`${ASSETS_URL}icons/general/home-${currentActiveIcon === "home" ? "o.svg" : "b.svg"}`}
                  alt="icon home"
                  className="pr-2 pb-1"
                />
                <span className={`${currentActiveIcon === "home" ? "text-or-100" : ""}`}>Home</span>
              </div>

              <div
                onClick={() => navigateTo(`/${lang}/hotels`)}
                className="flex items-center pr-4 text-gry-100 m-b hover:text-or-100 no-underline cursor-pointer"
              >
                <img
                  src={`${ASSETS_URL}icons/hotel/hotel-${currentActiveIcon === "hotels" ? "o.svg" : "b.svg"}`}
                  alt="hotel-menu"
                  className="pr-2"
                />
                <span className={`${currentActiveIcon === "hotels" ? "text-or-100" : ""}`}>Hotel</span>
              </div>

              <div
                onClick={() => navigateTo(`/${lang}/tours`)}
                className="flex items-center pr-4 text-gry-100 m-b hover:text-or-100 no-underline cursor-pointer"
              >
                <img
                  src={`${ASSETS_URL}icons/tour/tour-${currentActiveIcon === "tours" ? "o.svg" : "b.svg"}`}
                  alt="tour-menu"
                  className="pr-2"
                />
                <span className={`${currentActiveIcon === "tours" ? "text-or-100" : ""}`}>Tours</span>
              </div>

              <div
                onClick={() => navigateTo(`/${lang}/transports`)}
                className="flex items-center pr-4 text-gry-100 m-b hover:text-or-100 no-underline cursor-pointer"
              >
                <img
                  src={`${ASSETS_URL}icons/transport/transport-${
                    currentActiveIcon === "transports" ? "o.svg" : "b.svg"
                  }`}
                  alt="transport-menu"
                  className="pr-2"
                />
                <span className={`${currentActiveIcon === "transports" ? "text-or-100" : ""}`}>Transporte</span>
              </div>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  )
}
