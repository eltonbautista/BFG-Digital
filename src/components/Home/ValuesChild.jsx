import React, { Component } from "react";

export default function ValuesChild({ headerText, children }) {
  return (
    <div className="w-full p-4 px-0 text-left lg:w-1/3 xyz-nested">
      <hr className="mb-2 h-1.5 w-1/4 bg-neutral" />
      <h4 className="font-sans text-xl sm:text-2xl font-light leading-10 w-fit">
        &nbsp;{headerText}&nbsp;
      </h4>
      <p className="my-2"> {children}</p>
    </div>
  );
}
