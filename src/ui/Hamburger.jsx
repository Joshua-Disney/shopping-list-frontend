import React from "react";

const Hamburger = ({ display, ...props }) => {
  return (
    <div className="-mr-2 flex justify-end">
      <button
        className="inline-flex items-center justify-center p-2 rounded-md text-green-400 hover:text-white hover:bg-green-700 focus:outline-none focus:bg-green-700 focus:text-white transition duration-150 ease-in-out"
        aria-label="Main menu"
        aria-expanded="false"
        {...props}
      >
        <svg
          className={`${display ? "block" : "hidden"} h-6 w-6`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          className={`${display ? "hidden" : "block"} h-6 w-6`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default Hamburger;
