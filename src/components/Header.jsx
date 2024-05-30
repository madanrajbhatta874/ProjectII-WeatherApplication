import React from "react";
import logo from '../../public/mypic.jpg'

function Header() {
    return (
        <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">WeatherWise</div>
                <div className="flex items-center">
                    <div className="rounded-full me-2 overflow-hidden h-12 w-12">
                        <img src={logo} alt="Weather Logo" className="h-full w-full" />
                    </div>
                    <div className="text-bold relative inline-block">
                        <span className="text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-purple-600">
                            Your weather companion
                        </span>
                        <span className="absolute top-0 left-0 w-full h-full text-gray-400 animate-pulse">
                            Your weather companion
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
