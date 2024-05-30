/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";

function Temperature({ setCity, stats }) {
  const handleChange = (e) => {
    setCity(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          className="bg-gray-200 border border-gray-400 text-gray-800 placeholder-gray-400 text-md w-60 p-2 focus:outline-none focus:border-blue-400 rounded-md"
          placeholder="Enter Your City Name"
          defaultValue={"Cuttack"}
          onChange={handleChange}
        />
        <div className="ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-6 h-6 transform hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
        </div>
      </div>
      <div className="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`w-14 h-14 ${
            stats.isDay !== 0 ? "text-yellow-400" : "text-gray-400"
          } transform hover:scale-110 transition-transform duration-300 ease-in-out`}
        >
          <path d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
      </div>
      <div className="flex justify-center mt-8">
        <p className="font-semibold text-4xl">{stats.temp}</p>
        <span className="text-xl">°C</span>
      </div>
      <div className="flex justify-center mt-4 text-xl">
        {stats.condition}
      </div>
      <div className="flex justify-center mt-4 text-gray-600 text-sm">
        Today. {stats.time} | {stats.location}
      </div>
    </>
  );
}

export default Temperature;
