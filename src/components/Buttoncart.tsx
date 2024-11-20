import React from "react";

interface ButtonDarkProps {
    label: string;
    onClick?: () => void;
}

const ButtonDark: React.FC<ButtonDarkProps> = ({ label, onClick }) => {
    return (
        <button
            className="px-6 py-2 border border-[#3e3939] bg-[#000000] text-secondary hover:bg-secondary hover:text-[#000] transition duration-300 rounded"
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default ButtonDark;
