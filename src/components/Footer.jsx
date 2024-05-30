import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">© 2024 WeatherApp Inc. All rights reserved.</div>
        <div className="flex items-center">
          <span className="mr-4">Designed and developed by</span>
          <div className="text-bold relative inline-block">
      <span className="text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-purple-600">
        Madan Bhatt
      </span>
      <span className="absolute top-0 left-0 w-full h-full text-gray-400 animate-pulse">
        Madan Bhatt
      </span>
    </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
