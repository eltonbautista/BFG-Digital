import React, { Component } from "react";
import Button from "../Button";
import FeatureChild from "./FeatureChild";

export default function Features() {
  return (
    <section className="mx-auto max-w-screen-xl py-12 sm:py-16 lg:py-20 text-base-content">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium ">INTRODUCING</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl xl:text-5xl SEO">
            The Future of Analytics
          </h2>
          <hr className="mx-auto mt-4 h-2 w-32 border-none " />
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
            <div className="">
              <h3 className="text-4xl ">Get advantage over others</h3>
              <p className="mt-6 text-base text-accent">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                ipsa delectus quod?
              </p>
              <Button link="/" title="Learn more" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center md:flex-row">
            <FeatureChild
              headerText="Foo"
              imgAlt=""
              imgSrc="/favicon.svg"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsa delectus quod?"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
