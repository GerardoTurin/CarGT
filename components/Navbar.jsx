import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const Navbar = () => {
    
    return (
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <Link href="/" className="flex justify-center items-center cursor-pointer">
                    <Image src="/logo.svg" width={120} height={20} alt="logo" className="object-contain" />
                </Link>
                <CustomButton 
                    title="Sing In" 
                    containerStyles="text-blue-600 rounded-full bg-white min-w-[130px] font-medium hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out"
                    btnType="button"
                    />
            </nav>
        </header>
    )
};

export default Navbar;