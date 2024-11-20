import React from "react";

const LoadingAnimation: React.FC = () => {
    return (
        <div className="w-7 h-7 animate-ping rounded-full border-2 border-[#3b9df8] flex items-center justify-center">
            <div className="w-5 h-5 animate-ping rounded-full border-2 border-[#3b9df8]"></div>
        </div>
    );
};

export default LoadingAnimation;
