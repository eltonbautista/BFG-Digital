import React, { Component } from "react";
import ValuesChild from "./ValuesChild";

export default function AboutMe() {
  return (
    <section className="bg-neutral-content text-neutral">
      <div className="py-6 sm:py-8 lg:py-12 ">
        <div className="mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="md:pt-8 lg:flex lg:flex-col lg:justify-center">
              <p className="font-bold md:text-left">Who we are</p>

              <h3 className="mb-4 text-2xl md:text-3xl font-semibold text-neutral md:mb-6 md:text-left">
                A Calgary based website design and development team. Our goal is
                simple: we create attractive and highly performant websites that
                help drive traffic for your business!
              </h3>

              <p className="mb-4 sm:text-lg">
                Our team loves Calgary, but more importantly, we are a group of
                developers and designers who love building value for other
                businesses alike. And so, we created BFG Digital.
              </p>
              <p className="mb-6 sm:text-lg">
                We are a team of developers and designers who have a true
                passion for their craft, understand the importance of not
                cutting corners, and love providing exceptional solutions and
                value to our clients.
              </p>
            </div>
            <div>
              <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                <img
                  src="/images/calgary_website_design.webp"
                  loading="lazy"
                  alt="portrait of BFG Digital owner: Elton Bautista"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="container mx-auto w-full max-w-screen-xl border-t border-neutral border-solid ">
                <div className="w-full pt-10 pb-5">
                  <h3 className="text-center text-2xl md:text-3xl font-semibold">
                    Our Founding Values
                  </h3>
                  <q className="mx-auto mb-4 max-w-xl py-2 text-center text-xs sm:text-sm">
                    There is something fundamentally wrong with the process if
                    the cornerstones of our society are afraid to trust in one
                    another. We need to be the change we want to see.
                  </q>
                </div>
                <div className="flex flex-col lg:flex-row md:gap-6">
                  <ValuesChild headerText="INNOVATE">
                    BFG Digital embraces change. We understand that times are
                    rapidly changing and we take the proper measures necessary
                    to provide our clients with the best value possible.
                  </ValuesChild>
                  <ValuesChild headerText="GROW">
                    As a business, we understand how critical growth is. With
                    our dedicated and passionate team, we are determined to
                    create a stunning website for your business that will set
                    you apart for the rest.
                  </ValuesChild>
                  <ValuesChild headerText="SERVE">
                    We know how important customer service is, no really, we do.
                    And so, when you choose to work with BFG Digital we promise
                    a stress-free, fun, and valuable learning experience.
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
