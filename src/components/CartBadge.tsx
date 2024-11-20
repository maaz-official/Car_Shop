import React from "react";
import { IoCartOutline } from "react-icons/io5";

const CartBadge: React.FC = () => {
    return (
        <div className="relative">
            <IoCartOutline className="text-[2.7rem]" />
            <div className="absolute top-[-10%] right-[-15%] text-secondary min-w-[20px] min-h-[20px] text-center">
                <span className="text-[0.8rem] bg-primary py-1 px-1 rounded-full w-full h-full border-[2px] border-secondary">
                    10
                </span>
            </div>
        </div>
    );
};

export default CartBadge;
