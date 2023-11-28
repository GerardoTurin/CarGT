"use client";

import { updateSearchParams } from "@/utils/calculateRent";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";


const CustomFilters = ({ title, options }) => {
    const router = useRouter();
    const [selected, setSelected] = useState(options[0]);

    const handleUpdateParams = ({ title, value }) => {
        const newPathName = updateSearchParams(title, value.toLowerCase()); // Actualiza los parámetros de la URL
        router.push(newPathName, {scroll: false});   // Redirecciona a la nueva URL
    };
    
    return (
        <div className="w-fit">
            <Listbox 
                value={selected} 
                onChange={(evt) =>{ 
                    setSelected(evt)
                    handleUpdateParams({title, value: evt.value})
                    }}
            >
                <div className="relative w-fit z-10">
                    <Listbox.Button className="custom-filter__btn">
                        <span className="block truncate">
                            { selected.title }
                        </span>
                        <Image className="ml-4 object-contain" src="/chevron-up-down.svg" width={20} height={20} alt="chevron" />
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="custom-filter__options">
                            { options.map((option) => (
                                <Listbox.Option key={option.title} value={option} className="relative cursor-default select-none py-2 px-4">
                                    {({ selected, active }) => (
                                        <div className={`flex items-center p-1 ${active ? "bg-blue-200 rounded-sm" : ""}`}>
                                            <span className={`block truncate ${selected ? "font-semibold" : ""}`}>
                                                { option.title }
                                            </span>
                                        </div>
                                    )}
                                </Listbox.Option>
                            )) }
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}

export default CustomFilters;