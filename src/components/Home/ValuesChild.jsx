import React, { Component } from "react";

export default function ValuesChild({ headerText, children }) {
  return (
    <div className="w-full p-4 text-left lg:w-1/3">
      <hr className="mb-4 h-1.5 w-1/4 bg-primary" />
      <h3 className="font-sans text-4xl font-light leading-10 bg-accent w-fit">
        &nbsp;{headerText}&nbsp;
      </h3>
      <p className="my-5"> {children}</p>
    </div>
  );
}
