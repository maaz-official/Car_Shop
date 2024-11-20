import React from 'react';
import { Car } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Car className="h-8 w-8 text-blue-600" />
                        <span className="ml-2 text-xl font-bold text-white">AutoElite</span>
                    </div>
                    <div className="text-sm">
                        © 2024 AutoElite. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
