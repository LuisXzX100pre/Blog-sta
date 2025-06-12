"use client";

import { useEffect, useState, Fragment } from "react";

// LP
import { Listbox, Transition } from "@headlessui/react";

const typeCurrency = [
  {
    name: "MXN",
    value: "MXN",
    img: `${process.env.NEXT_PUBLIC_URL}icons/money/money-b.svg`,
  },
];
// end lp
export function SelectCurrency() {
  const [currency, setCurrency] = useState("MXN");

  const currencySelected = (event) => {
    const currencySelected = event.target.value;
    setCurrency(currencySelected);
  };

  useEffect(() => {
    localStorage.setItem("currency", currency);
  }, [currency]);
  //
  const [selected, setSelected] = useState(typeCurrency[0]);

  return (
    <>
      {/* <div className="flex gap-[3px]">
        <img
          src={`${process.env.NEXT_PUBLIC_URL}icons/money/money-b.svg`}
          alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon money`}
          width={18}
          height={18}
        />

        <select
          defaultValue="MXN"
          onChange={currencySelected}
          id="location"
          name="location"
          className="w-max block border-0 bg-transparent focus:outline-none m-s-b text-gry-100 appearance-none px-[3px]"
        >
          <option className="m-s-b text-fs-12">MXN</option>
        </select>
        <img
          src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/down-100.svg`}
          alt="icon arrow down"
          width={8}
          height={8}
        />
      </div> */}

      {/* LP TAILWIND */}
      <div className="w-max block m-s-b text-gry-100">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative">
            <Listbox.Button className="relative flex gap-1 w-full cursor-default rounded-lg bg-transparent pl-3 pr-7 text-left focus:outline-none items-center">
              <img
                src={`${process.env.NEXT_PUBLIC_URL}icons/money/money-b.svg`}
                alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon money`}
                width={18}
                height={18}
              />
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute right-0 flex items-center justify-center pr-2">
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/down-100.svg`}
                  alt="icon arrow down"
                  width={9}
                  height={8}
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="ml-[21px] absolute mt-1 w-[60%] overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {typeCurrency.map((currency, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      `relative cursor-default select-none py-1 ${
                        active ? "bg-bl-100 text-white" : "text-gray-900"
                      }`
                    }
                    value={currency}
                  >
                    <div className="flex gap-1 justify-center">
                      <span className={`block truncate m-b pl-1`}>
                        {currency.name}
                      </span>
                    </div>
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
      {/* END LP */}
    </>
  );
}
