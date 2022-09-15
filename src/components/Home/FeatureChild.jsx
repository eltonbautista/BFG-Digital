import React, { Component } from "react";
import Button from "../Button";

export default function FeatureChild({ imgSrc, imgAlt, headerText, children }) {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row">
      <img
        className="h-56 object-cover md:order-2 md:object-left"
        src={imgSrc}
        alt={imgAlt}
        width="400px"
        height="500px"
      />
      <div className="">
        <h3 className="text-4xl font-bold">
          <b>{headerText}</b>
        </h3>
        <p className="mt-6 text-base text-base-content max-w-4xl">{children}</p>
        <Button
          color="secondary"
          bg="accent"
          hoverColor="accent"
          link="/"
          title="Learn more"
          direction="left"
        />
      </div>
    </div>
  );
}
