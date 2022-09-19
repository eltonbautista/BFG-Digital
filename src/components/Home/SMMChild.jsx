import React, { Component } from "react";

export default function SMMChild({ step, headerText, text }) {
  return (
    <div className="relative flex gap-5 text-neutral">
      <div className="absolute -left-12 flex h-fit w-10 items-center justify-center rounded-full text-sm md:text-lg sm:static sm:bg-transparent pl-3">
        {step}
      </div>
      <div className="">
        <h3 className="text-xl font-medium">{headerText}</h3>
        <p className="mt-3">{text}</p>
      </div>
    </div>
  );
}
