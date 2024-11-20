import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { GoLinkExternal } from "react-icons/go";

const ResponsiveSearchbar: React.FC = () => {
    const productsData = [
        {
            id: 1,
            name: "Apple iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1\"",
            image: "https://i.ibb.co/d4jgmFW/01.png",
            productLink: "#",
        },
        {
            id: 2,
            name: "Mobile Phone Nokia 8210, Dual SIM, 4G",
            image: "https://i.ibb.co/fCpcnhM/02.png",
            productLink: "#",
        },
        {
            id: 3,
            name: "SONY SRSXV900, Wireless Party Speaker, MEGA BASS",
            image: "https://i.ibb.co/2dYkwd3/03-1.png",
            productLink: "#",
        },
        {
            id: 4,
            name: "Headphones, Noise cancelling, Bluetooth 5.0",
            image: "https://i.ibb.co/f8xPk0G/04-1.png",
            productLink: "#",
        },
        {
            id: 5,
            name: "D-SLR Canon EOS R10, 4k, DIGIC X, RF-S 18-45mm",
            image: "https://i.ibb.co/dg7FmKY/05-1.png",
            productLink: "#",
        },
    ];

    const [filteredData, setFilteredData] = useState(productsData);
    const [inputText, setInputText] = useState("");
    const [inputFocus, setInputFocus] = useState(true);

    // Filter products based on search input
    useEffect(() => {
        const filtered = productsData.filter((product) =>
            inputText === "" ? productsData : product.name.toLowerCase().includes(inputText.toLowerCase())
        );
        setFilteredData(filtered);
    }, [inputText]);

    // Function to truncate text
    const truncate = (text: string, maxLength: number, ellipsis = "...") => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength - ellipsis.length) + ellipsis;
    };

    return (
        <div className="relative w-full sm:w-[80%] product_search_input">
            {/* Search Input */}
            <input
                className="px-4 py-2 border border-gray-300 rounded-md w-full pl-[40px] outline-none focus:border-blue-500"
                placeholder="Search..."
                onChange={(e) => setInputText(e.target.value)}
                onClick={() => setInputFocus(true)}
                onBlur={() => setTimeout(() => setInputFocus(false), 200)} // Delay to prevent flickering when clicking outside
            />
            <IoIosSearch className="absolute top-[9px] left-2 text-[1.5rem] text-gray-400" />

            {/* Search Suggestions */}
            <div
                className={`${
                    inputFocus ? "opacity-100 h-auto translate-y-0 mt-2" : "translate-y-[-10px] opacity-0 h-0"
                } product_search_bar bg-white shadow-md w-full transition-all duration-500 overflow-hidden flex flex-col rounded-md`}
            >
                {filteredData.map((product) => (
                    <a
                        key={product.id}
                        href={product.productLink}
                        className="flex items-center justify-between w-full px-6 py-4 hover:bg-gray-50 cursor-pointer rounded-md"
                    >
                        <div className="flex items-center gap-3">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-[30px] h-[30px] object-cover"
                            />
                            <h1 className="text-sm sm:text-base text-gray-700 font-medium">
                                {truncate(product.name, 60)}
                            </h1>
                        </div>
                        <GoLinkExternal className="text-lg text-gray-400" />
                    </a>
                ))}

                {!filteredData.length && (
                    <p className="text-sm py-3 text-gray-400 text-center">No search matched!</p>
                )}
            </div>
        </div>
    );
};

export default ResponsiveSearchbar;
