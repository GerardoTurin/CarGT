"use client";
import Image from "next/image";



const CustomButton = ({title, containerStyles, handleClick, btnType, rightIcon}) => {
    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1`}>
                {title}
            </span>
            {
                rightIcon && (
                    <div className="relative w-6 h-6">
                        <Image
                            src={rightIcon}
                            alt="right icon"
                            layout="fill"
                            className="object-contain"
                        />
                    </div>
                )
            }
        </button>
    )
}

export default CustomButton;