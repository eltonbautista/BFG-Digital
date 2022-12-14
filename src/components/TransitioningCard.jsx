import React, { Component } from "react";

export default function TransitioningCard({
  title,
  imgOneSrc,
  imgTwoSrc,
  link,
  projectType,
}) {
  return (
    <div className="grid justify-items-center">
      <div className="group flex w-full h-full max-w-sm flex-col self-center overflow-hidden">
        <a className="relative flex h-60 overflow-hidden " href={link}>
          <img
            className="peer absolute top-0 right-0 h-full w-full object-contain md:object-cover"
            src={imgOneSrc}
            alt={`${title} screenshot`}
            width="200px"
            height="200px"
          />
          <img
            className="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-75 duration-1000 hover:right-0"
            src={imgTwoSrc}
            alt={`${title} screenshot`}
            width="200px"
            height="200px"
          />
          <span className="absolute top-0 left-0 m-2 px-2 py-1 text-center text-sm font-medium sr-only">
            {projectType}
          </span>
        </a>
        <div className="mt-1 md:mt-4">
          <a href={link}>
            <p className="text-xl lg:text-2xl tracking-tight">{title}</p>
          </a>
        </div>
      </div>
    </div>
  );
}
