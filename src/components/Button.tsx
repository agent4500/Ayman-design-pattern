import React from "react";

export default function Button({
  children,
  onClick,
}: {
  children: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="mx-5 relative px-5 py-3 overflow-hidden font-medium text-yellow-700 bg-yellow-200 border border-yellow-300 rounded-lg shadow-inner group"
    >
      <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-500 border-t-2 border-yellow-700 group-hover:w-full ease"></span>
      <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-500 border-b-2 border-yellow-700 group-hover:w-full ease"></span>
      <span className="absolute top-0 left-0 w-full h-0 transition-all duration-500 delay-300 bg-yellow-700 group-hover:h-full ease"></span>
      <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-500 delay-300 bg-yellow-700 group-hover:h-full ease"></span>
      <span className="absolute inset-0 w-full h-full duration-500 delay-600 bg-yellow-900 opacity-0 group-hover:opacity-100"></span>
      <span className="relative transition-colors duration-300 delay-200 group-hover:text-green ease">
        {children}
      </span>
    </button>
  );
}
