import React, { Component } from "react";
import Button, { ButtonTwo } from "../Button";

export default function SEOSection() {
  return (
    <section className="grid justify-items-center bg-success text-neutral">
      <div className="h-screen w-full">
        <div className="mx-auto max-w-screen-xl px-4 md:px-6 md:flex lg:px-8">
          <div className="relative mx-auto my-auto flex flex-col items-center">
            <div className="grid gap-2 lg:gap-4 mb-4">
              <h2 className="text-left text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                Search Engine Optimization{" "}
                <span className="whitespace-nowrap">(SEO)</span>
              </h2>
              <div>
                <h3 className="mt-4 lg:mt-0 text-left text-base max-w-5xl">
                  Calgary, Search Engine Optimization is the bread and butter of
                  a successful website and it is one of the most important
                  factors to increasing your business's traffic. We have
                  cultivated a particular culture here at BFG Digital that has
                  allowed us to maintain a strategized structure when
                  approaching Search Engine Optimization.
                </h3>
                <div className="flex flex-col sm:flex-row sm:space-x-4 sm:px-0">
                  <Button title="Start Now" />
                  {/* <ButtonTwo link="/" title="" /> */}
                </div>
              </div>
            </div>
            <img
              className="w-full h-full max-w-full max-h-full mb-2"
              src="/images/best_performance_seo.png"
            ></img>
            <caption>
              A client's website rated on Google's Lighthouse Analytics (a tool
              created by Google to assess a website's{" "}
              <b>
                Performance, Search Engine Optimization (SEO), Best Practices
                (Security, Design) and Accessibility.
              </b>{" "}
              a very important metric for indicating a website's success!
            </caption>
          </div>
        </div>
      </div>
    </section>
  );
}
