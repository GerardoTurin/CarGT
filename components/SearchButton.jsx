import Image from "next/image";

const SearchButton = ({ otrasClases }) => {
    return (
        <button type="submit" className={`-ml-3 z-10 ${otrasClases}`}>
            <Image src="/magnifying-glass.svg" alt="magnify glass" width={40} height={40} className="object-contain" />
        </button>
    )
};

export default SearchButton;