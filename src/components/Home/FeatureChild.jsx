import React, { Component } from "react";
import Button from "../Button";

export default function FeatureChild({ imgSrc, imgAlt, headerText, text }) {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row">
      <img
        className="h-56 object-contain md:order-2 md:object-left"
        src={imgSrc}
        alt={imgAlt}
      />
      <div className="">
        <h3 className="text-4xl">{headerText}</h3>
        <p className="mt-6 text-base text-gray-500">{text}</p>
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
