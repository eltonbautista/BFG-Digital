import React, { Component } from "react";
import Button from "../Button";
import FeatureChild from "./FeatureChild";

export default function Features() {
  return (
    <section className="mx-auto max-w-screen-xl py-12 text-blue-700 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-blue-800">INTRODUCING</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl xl:text-5xl">
            The Future of Analytics
          </h2>
          <hr className="mx-auto mt-4 h-2 w-32 border-none bg-blue-700" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-20 text-center sm:mx-auto sm:max-w-sm md:mt-20 md:max-w-full md:text-left">
          <FeatureChild
            headerText="Foo"
            imgAlt=""
            imgSrc="/favicon.svg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsa delectus quod?"
          />
          <div className="flex flex-col items-center justify-center md:flex-row">
            <img
              className="h-56 object-contain md:ml-0 md:object-left"
              src="/favicon.svg"
              alt=""
            />
            <div className="sm:ml-10">
              <h3 className="text-4xl">Get advantage over others</h3>
              <p className="mt-6 text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                ipsa delectus quod?
              </p>
              <Button
                color="primary"
                hoverColor="accent"
                link="/"
                title="Learn more"
                direction="left"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center md:flex-row">
            <img
              className="md:ml-10 h-56 object-contain md:order-2 md:object-left"
              src="/favicon.svg"
              alt=""
            />
            <div className="">
              <h3 className="text-4xl">Recover lost revenue</h3>
              <p className="mt-6 text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                ipsa delectus quod?
              </p>
              <Button
                color="primary"
                hoverColor="accent"
                link="/"
                title="Learn more"
                direction="left"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
