import React, { Component } from "react";

export default function ValuesChild({ headerText, children }) {
  return (
    <div class="w-full p-4 text-left lg:w-1/3">
      <hr class="mb-4 h-1.5 w-1/4 bg-primary" />
      <h3 class="font-sans text-4xl font-light leading-10 bg-accent w-fit">
        &nbsp;{headerText}&nbsp;
      </h3>
      <p class="my-5"> {children}</p>
    </div>
  );
}
