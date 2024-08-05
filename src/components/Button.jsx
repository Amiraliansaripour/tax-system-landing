const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, borderRadius, fullWidth }) => {
    return (
        <button
            className={`flex justify-center items-center gap-2 px-7 py-4 border font-bold text-base leading-none shadow-3xl hover:shadow-coral-red transition-all
            ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor} ${borderRadius}` : 'bg-coral-red  text-black border-coral-red rounded-[4px]'} 
            ${fullWidth && 'w-full'}'`}>
            {label}

            {iconURL && <img
                src={iconURL}
                alt="arrow right icon"
                className="ml-2 rounded-sm w-5 h-5"
            />}
        </button>
    )
}

export default Button;