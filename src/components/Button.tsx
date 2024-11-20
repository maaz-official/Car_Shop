import React from "react";

interface ButtonPrimaryProps {
    label: string;
    onClick?: () => void;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ label, onClick }) => {
    return (
        <button
            className="px-6 py-2 border border-[#3B9DF8] bg-[#3B9DF8] text-[#ffffff] hover:bg-[#ffffff] hover:text-primary transition duration-300 rounded"
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default ButtonPrimary;
