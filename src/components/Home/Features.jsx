import React, { Component } from "react";
import Button from "../Button";
import FeatureChild from "./FeatureChild";

export default function Features() {
  return (
    <section className="mx-auto max-w-screen-xl py-12 sm:py-16 lg:py-20 text-base-content">
      <div className="mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto">
          <p className="font-semibold">INTRODUCING</p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl xl:text-5xl max-w-5xl SEO ">
            Digital Services that Take Your Business to the{" "}
            <em className="border-b-4 border-success not-italic">Next Level</em>
          </h2>
          <hr className="mx-auto mt-4 h-2 w-32 border-none " />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-20 sm:mx-auto sm:max-w-sm md:mt-20 md:max-w-full md:text-left">
          <FeatureChild
            headerText="Web Development & Design"
            imgAlt="Low code development concept illustration by storycode from freepik.com"
            imgSrc="/images/web_development.png"
          >
            Our expert website developers & designers strive for a highly
            performant, fully-responsive, and modern looking website design when
            crafting your personalized custom websites.
            <span className="font-semibold">
              {" "}
              We only use state of the art, up-to-date technologies. We simply
              want you, your business, and your customers to receive the best of
              the best user experience available.
            </span>
          </FeatureChild>
          <div className="flex flex-col items-center md:flex-row">
            <img
              className="h-56 object-contain md:ml-0 md:object-left "
              src="/images/seo.png"
              alt="seo analytics team concept illustration by storyset from freepik.com"
              width="400px"
              height="500px"
            />
            <div className="">
              <h3 className="text-2xl md:text-3xl font-semibold">
                Search Engine Optimization (SEO)
              </h3>
              <p className="mt-6 text-base text-base-content max-w-4xl">
                What's the point of a beautifully designed website if you're not
                receiving any traffic?{" "}
                <span className="font-semibold">
                  Search Engine Optimization (SEO) is one of the largest driving
                  factors for generating traffic and increasing conversion for
                  your business.
                </span>{" "}
                Here at BFG Digital, we are serious about our goal of being{" "}
                <span className="font-semibold">
                  Calgary's best Search Engine Optimization & Website
                  Development Company.
                </span>{" "}
                We've developed a set of{" "}
                <span className="font-semibold">
                  extremely powerful and proven techniques
                </span>{" "}
                to rank <span className="font-semibold">your </span>
                website at the{" "}
                <span className="font-semibold">top of Google</span>.
              </p>
              <Button link="/" title="Learn more" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center md:flex-row">
            <FeatureChild
              headerText="Social Media Marketing & Management"
              imgAlt="hand drawn illustration of people with smartphone for marketing by pikisuperstar from freepik.com"
              imgSrc="/images/SMM.png"
            >
              Modern problems call for modern solutions, Social Media has been
              the largest craze in the past decade and it's only becoming more
              prominent day by day.{" "}
              <span className="font-semibold">
                Reaching a greater audience and increasing customer conversions
                for your business shouldn't be difficult - and it doesn't have
                to be.
              </span>{" "}
              We offer solutions that will passively and surely guide your
              customers to you.
            </FeatureChild>
          </div>
        </div>
      </div>
    </section>
  );
}
