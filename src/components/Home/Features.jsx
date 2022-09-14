import React, { Component } from "react";
import Button from "../Button";
import FeatureChild from "./FeatureChild";

export default function Features() {
  return (
    <section className="mx-auto max-w-screen-xl py-12 sm:py-16 lg:py-20 text-base-content">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-bold">What do we specialize in?</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl xl:text-5xl SEO">
            Digital Services that Take Your Business to the{" "}
            <em className="border-b-4 border-accent not-italic">Next Level</em>
          </h2>
          <hr className="mx-auto mt-4 h-2 w-32 border-none " />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-20 text-center sm:mx-auto sm:max-w-sm md:mt-20 md:max-w-full md:text-left">
          <FeatureChild
            headerText="Web Development & Design"
            imgAlt=""
            imgSrc="/favicon.svg"
          >
            Our expert website developers & designers strive for a highly
            performant, fully-responsive, and modern looking website design when
            crafting your personalized custom websites.
            <b>
              {" "}
              We only use state of the art, up-to-date technologies. We simply
              want you, your business, and your customers to receive the best of
              the best user experience available.
            </b>
          </FeatureChild>
          <div className="flex flex-col items-center justify-center md:flex-row">
            <img
              className="h-56 object-contain md:ml-0 md:object-left"
              src="/favicon.svg"
              alt=""
              width="200px"
              height="200px"
            />
            <div className="">
              <h3 className="text-4xl font-bold">
                <b>Search Engine Optimization (SEO)</b>
              </h3>
              <p className="mt-6 text-base text-base-content max-w-4xl">
                What's the point of a beautifully designed website if you're not
                receiving any traffic?{" "}
                <b>
                  Search Engine Optimization (SEO) is one of the largest driving
                  factors for generating traffic and increasing conversion for
                  your business.
                </b>{" "}
                Here at BFG Digital, we are serious about our goal of being{" "}
                <b>
                  Calgary's best Search Engine Optimization & Website
                  Development Company.
                </b>{" "}
                We've developed a set of{" "}
                <b>extremely powerful and proven techniques</b> to rank{" "}
                <b>your </b>
                website at the <b>top of Google</b>.
              </p>
              <Button link="/" title="Learn more" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center md:flex-row">
            <FeatureChild
              headerText="Social Media Marketing & Management"
              imgAlt=""
              imgSrc="/favicon.svg"
            >
              Modern problems call for modern solutions, Social Media has been
              the largest craze in the past decade and it's only becoming more
              prominent day by day.{" "}
              <b>
                Reaching a greater audience and generating increasing customer
                conversions for your business shouldn't be difficult - and it
                doesn't have to be.
              </b>{" "}
              We offer solutions that will passively and surely guide your
              customers to you.
            </FeatureChild>
          </div>
        </div>
      </div>
    </section>
  );
}
