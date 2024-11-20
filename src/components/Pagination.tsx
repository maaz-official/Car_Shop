import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const renderPageNumbers = () => {
        return Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`mx-1 px-4 py-2 rounded-full transition-all duration-300 ${
                    currentPage === page
                        ? "bg-[#3B9DF8] text-white scale-110 shadow-md"
                        : "bg-transparent text-blue-600 hover:bg-blue-100"
                }`}
            >
                {page}
            </button>
        ));
    };

    return (
        <div className="flex items-center justify-center mt-8 space-x-2">
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="mx-1 px-3.5 py-3.5 rounded-full bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <FaChevronLeft />
            </button>
            {renderPageNumbers()}
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="mx-1 px-3.5 py-3.5 rounded-full bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <FaChevronRight />
            </button>
        </div>
    );
};

export default Pagination;
