import React, { Component } from "react";

export default function Button({ title, link }) {
  return (
    <button className="mt-3">
      <a
        className="uppercase font-medium relative inline-block px-8 py-3 overflow-hidden border border-primary group focus:outline-none focus:ring"
        href={link}
      >
        <span className="absolute inset-y-0 left-0 w-[2px] transition-all bg-primary group-hover:w-full group-active:bg-primary-content"></span>

        <span className="relative text-sm font-medium transition-colors group-hover:text-white">
          {title}
        </span>
      </a>
    </button>
  );
}

function ButtonTwo({ title, link }) {
  return (
    <a
      href={link}
      aria-label=""
      className="group inline-flex items-center lg:px-0 font-medium uppercase md:mt-1 hover:underline"
    >
      {title}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="group-hover:translate-x-2 ml-4 h-6 w-6 transition-transform"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </a>
  );
}
export { ButtonTwo };
