import React, { Component } from "react";

export default function Button({ title, link }) {
  return (
    <button className="mt-3">
      <a
        class="relative inline-block px-8 py-3 overflow-hidden border border-primary group focus:outline-none focus:ring"
        href={link}
      >
        <span class="absolute inset-y-0 left-0 w-[2px] transition-all bg-primary group-hover:w-full group-active:bg-primary-content"></span>

        <span class="relative text-sm font-medium text-base-content transition-colors group-hover:text-white">
          {title}
        </span>
      </a>
    </button>
  );
}
