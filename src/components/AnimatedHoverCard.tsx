import React, { useRef, useState } from "react";

interface AnimatedHoverCardProps {
    title: string;
    description: string;
    image: string;
}

const AnimatedHoverCard: React.FC<AnimatedHoverCardProps> = ({ title, description, image }) => {
    const [isHovering, setIsHovering] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            ref={cardRef}
            className="w-full border relative overflow-hidden border-gray-200 rounded-lg p-6 cursor-pointer shadow-md hover:shadow-lg transition-shadow"
        >
            <h2 className="text-xl font-bold text-blue-600">{title}</h2>
            <p className="text-gray-600 mt-2">{description}</p>
            <img src={image} alt={title} className="w-20 h-20 mt-3 float-right" />
            {isHovering && (
                <div
                    className="absolute inset-0 pointer-events-none blur-[50px]"
                    style={{
                        background: `radial-gradient(circle 50px at ${mousePosition.x}px ${mousePosition.y}px, #DB06F9, transparent)`,
                    }}
                />
            )}
        </div>
    );
};

export default AnimatedHoverCard;
