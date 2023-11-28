"use client";
import { manufacturers } from "@/utils";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";


const SearchManuFacturer = ({ manuFacturer, setManuFacturer }) => {
    const [query, setQuery] = useState('');

    const filteredManufacturers =
        query === ''
            ? manufacturers
            : manufacturers.filter((marca) =>
                marca.toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, '')
                    ));

    return (
        <div className="search-manufacturer">
            <Combobox value={manuFacturer} onChange={setManuFacturer}>
                <div className="relative w-full">
                    <Combobox.Button className='absolute top-[14px]'>
                        <Image src="/car-logo.svg" width={20} height={20} className="ml-4" alt="car-logo" />
                    </Combobox.Button>
                    <Combobox.Input
                        className="search-manufacturer__input"
                        placeholder="Volskwagen"
                        displayValue={(marca) => marca}
                        onChange={() => setQuery('')}
                    />
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options>
                            {
                                filteredManufacturers.map((marca) => (
                                    <Combobox.Option
                                        key={marca}
                                        value={marca}
                                        className={({ active }) => `
                                            relative search-manufacturer__option
                                            ${active ? 'bg-blue-500 text-white' : 'text-gray-900'}`
                                        }>
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                >
                                                    {marca}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center 
                                                                    pl-3 ${active ? 'text-white' : 'text-teal-600'}`}
                                                    >
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                )
                                )
                            }
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManuFacturer;