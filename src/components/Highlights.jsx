/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Highlights({ stats }) {
  return (
    <div className="flex flex-col text-gray-900 bg-gray-200 justify-start items-center p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">{stats.title}</h2>
      <div className="flex items-center justify-center">
        <span className="text-4xl font-bold">{stats.value}</span>
        <span className="text-xl ml-1">{stats.unit}</span>
      </div>
      {stats.direction && (
        <div className="mt-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
          <div className="text-gray-600">{stats.direction}</div>
        </div>
      )}
      {stats.title === "Humidity" && (
        <div className="w-full mt-4 bg-gray-300 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: `${stats.value}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default Highlights;
