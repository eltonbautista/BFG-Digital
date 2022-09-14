import React, { Component } from "react";
import ValuesChild from "./ValuesChild";

export default function AboutMe() {
  return (
    <section className="bg-neutral-content text-neutral">
      <div className="py-6 sm:py-8 lg:py-12 ">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="md:pt-8 lg:flex lg:flex-col lg:justify-center">
              <p className="text-center font-bold text-accent md:text-left">
                Who we are
              </p>

              <h2 className="mb-4 text-center text-2xl font-bold text-neutral sm:text-3xl md:mb-6 md:text-left">
                Operational since 1967
              </h2>

              <p className="mb-6  sm:text-lg md:mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Possimus accusamus esse cum, praesentium laudantium enim
                pariatur magnam accusantium illum animi? Quos quisquam at
                laborum eius?
              </p>
            </div>
            <div>
              <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1554743365-a80c1243316e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  loading="lazy"
                  alt="portrait of BFG Digital owner: Elton Bautista"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="container mx-auto w-full max-w-screen-xl border-t border-neutral border-solid ">
                <div className="w-full pt-10 pb-5">
                  <h3 className="text-center text-3xl font-extrabold">
                    Our Values
                  </h3>
                  <p className="mx-auto mb-4 max-w-xl py-2 text-center sm:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio reprehenderit accusamus incidunt.
                  </p>
                </div>
                <div className="flex flex-col lg:flex-row">
                  <ValuesChild headerText="INNOVATE">
                    Deleniti earum nulla repudiandae esse delectus. Dolorem, hic
                    animi sit pariatur ducimus commodi tempore.
                  </ValuesChild>
                  <ValuesChild headerText="GROW">
                    Deleniti earum nulla repudiandae esse delectus. Dolorem, hic
                    animi sit pariatur ducimus commodi tempore.
                  </ValuesChild>
                  <ValuesChild headerText="SERVE">
                    Deleniti earum nulla repudiandae esse delectus. Dolorem, hic
                    animi sit pariatur ducimus commodi tempore.
                  </ValuesChild>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
