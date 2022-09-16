import React, { Component } from "react";

export default function ValuesChild({ headerText, children }) {
  return (
    <>
      <hr className="mb-4 h-1.5 w-1/4 bg-neutral" />
      <h3 className="font-sans text-xl sm:text-3xl font-light leading-10 w-fit">
        &nbsp;{headerText}&nbsp;
      </h3>
      <p className="my-5"> {children}</p>
    </>
  );
}
