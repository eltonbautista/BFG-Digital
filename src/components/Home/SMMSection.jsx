import React, { Component } from "react";
import SMMChild from "./SMMChild";

export default function SSMSection() {
  return (
    <section className="grid justify-items-center">
      <div className="my-10 grid max-w-screen-xl grid-cols-1 px-4 lg:grid-cols-3">
        <div className="col-span-1 flex flex-col justify-center text-center sm:text-left md:pr-10">
          <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold">
            What you can expect from our services
          </h2>
          <p className="">
            Our Web Development and Search Engine Optimization methods will help
            you connect with more customers than ever before.
          </p>
        </div>
        <div className="col-span-2 mt-10 grid grid-cols-1 gap-6 rounded-2xl bg-accent p-5 sm:p-10 md:grid-cols-2 lg:mt-0 ">
          <SMMChild
            step="01"
            headerText="Beginning"
            text="Lorem ipsum poo poo boo boo"
          />
          <SMMChild
            step="01"
            headerText="Beginning"
            text="Lorem ipsum poo poo boo boo"
          />
          <SMMChild
            step="01"
            headerText="Beginning"
            text="Lorem ipsum poo poo boo boo"
          />
          <SMMChild
            step="01"
            headerText="Beginning"
            text="Lorem ipsum poo poo boo boo"
          />
        </div>
      </div>
    </section>
  );
}
