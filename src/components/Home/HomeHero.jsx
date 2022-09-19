import React, { Component } from "react";
import Button from "../Button";
import { companyName } from "../../helpers/companyName";

export default function Hero() {
  return (
    <>
      <section className="relative pb-28 lg:pt-0 lg:pb-32">
        <div className="max-h-screen w-full overflow-hidden">
          <video
            className="absolute w-full h-full max-h-full max-w-full object-cover "
            autoPlay
            loop
            muted
          >
            <source src="/images/calgary_web_design.mp4"></source>
          </video>
        </div>

        <div className="mx-auto h-full px-4 py-4 pt-10 md:py-40 sm:max-w-xl md:max-w-full md:px-8 lg:max-w-screen-xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 flex flex-col items-center justify-between lg:flex-row z-10">
            <div className="w-full min-h-full z-20 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 mb-4 lg:mb-0 hidden md:grid">
              <img
                className=" w-fullh-full z-20 object-cover"
                src="/images/bfg_interactive_logo.png"
                alt="BFG Interactive Logo"
                loading="lazy"
                width="766px"
                height="176px"
              ></img>
            </div>
            <div className="z-20 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2">
              <div className="lg:max-w-xl text-[#CCCCCC]">
                <p className="flex text-xs md:text-sm uppercase mb-2 md:mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 inline h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Calgary Website Design For Enabling Business Success
                </p>
                <h1 className="mb-3 max-w-xl text-5xl leading-tight tracking-tight lg:text-6xl xxl:text-8xl sm:leading-tight">
                  Websites that generate growth for{" "}
                  <span className="inline-block border-b-4 border-secondary-content">
                    your business.
                  </span>
                  <span className="sr-only">
                    Best Website Developer Calgary Best Website Design Calgary
                    Best SEO Calgary Best Search Engine Optimization Calgary
                    Best Website Developer Calgary Best Website Design Calgary
                    Best SEO Calgary Best Search Engine Optimization Calgary
                    Best Website Developer Calgary Best Website Design Calgary
                    Best SEO Calgary Best Search Engine Optimization Calgary
                    Best Website Developer Calgary Best Website Design Calgary
                    Best SEO Calgary Best Search Engine Optimization Calgary
                    Best Website Developer Calgary Best Website Design Calgary
                    Best SEO Calgary Best Search Engine Optimization Calgary
                    Best Website Developer Calgary Best Website Design Calgary
                    Best SEO Calgary Best Search Engine Optimization Calgary
                    Best Website Developer Calgary Best Website Design Calgary
                    Best SEO Calgary Best Search Engine Optimization Calgary
                    Best Website Developer Calgary Best Website Design Calgary
                    Best SEO Calgary Best Search Engine
                  </span>
                </h1>
                <h2>
                  Our professional website designers and developers are experts
                  in crafting gorgeous, and highly performant websites. In
                  combination with our skilled SEO specialists, {companyName} is
                  confident in providing an unparalelled website experience for
                  your visitors, and ultimately, an exceptional value for{" "}
                  <span className="border-b-2 border-secondary-content">
                    you.
                  </span>{" "}
                  <span className="sr-only">
                    Search Engine Optimization SEO Search Engine Optimization
                    SEO Search Engine Optimization SEO Search Engine
                    Optimization SEO Search Engine Optimization SEO Search
                    Engine Optimization SEO Search Engine Optimization SEO
                    Search Engine Optimization SEO
                  </span>
                </h2>
              </div>
              <div className="mt-2 lg:mt-6 flex flex-col items-start justify-items-start md:flex-row text-[#CCCCCC]">
                <Button link="/" title="Start now" />
                <a
                  href="/calgary-web-design-company/web-development/#serviceSteps"
                  aria-label=""
                  className="group inline-flex items-center uppercase px-4 pl-0 self-center md:pl-4 mt-4 md:mt-1 hover:underline font-medium"
                >
                  How our websites generate business for you
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:translate-x-2 ml-4 h-6 w-6 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
