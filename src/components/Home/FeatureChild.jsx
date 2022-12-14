import React, { Component } from "react";
import Button from "../Button";

export default function FeatureChild({
  imgSrc,
  imgAlt,
  headerText,
  children,
  link,
}) {
  return (
    <div className="flex flex-col items-center md:flex-row w-full gap-x-6">
      <img
        className="h-auto lg:w-1/3 object-cover md:order-2 md:object-left"
        src={imgSrc}
        alt={imgAlt}
        width="400px"
        height="500px"
      />
      <div className="mt-2">
        <h3 className="text-2xl md:text-3xl font-medium">{headerText}</h3>
        <p className="mt-2 text-base-content max-w-4xl">{children}</p>
        <Button
          color="secondary"
          bg="accent"
          hoverColor="accent"
          link={link}
          title="Learn about our process"
          direction="left"
        />
      </div>
    </div>
  );
}
