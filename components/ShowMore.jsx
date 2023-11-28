"use client";

import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils/calculateRent";


const ShowMore = ({ PageNumber, isNextPage }) => {
    const router = useRouter();

    const handleNavigation = () => {
        const newLimit = ( PageNumber + 1 ) * 10;   // Calcula el nuevo valor de 'limit' para el query param
        const newPathName = updateSearchParams('limit', `${newLimit}`);  // Actualiza el query param 'limit' con el nuevo valor de newLimit

        router.push(newPathName, {scroll: false});   // Navega a la nueva ruta con el nuevo query param
    };

    return (
        <div className="w-full flex-center gap-5 mt-10">
            {
                !isNextPage && (
                    <CustomButton
                        title="Show More"
                        btnType="button"
                        containerStyles="bg-blue-600 hover:bg-blue-700 text-white rounded-full mt-10 transition duration-300 ease-in-out"
                        handleClick={handleNavigation}
                    />
                )
            }
        </div>
    )
}

export default ShowMore;