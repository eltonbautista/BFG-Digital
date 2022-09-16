import React, { Component, useRef, useEffect } from "react";
import SMMChild from "./SMMChild";
import intersectionAnimator from "../../helpers/intersectionAnimator";

export default function SSMSection() {
  const descriptionContainer = useRef(null);
  const steps = useRef(null);

  const elementsToAnimate = [descriptionContainer, steps];

  useEffect(() => {
    intersectionAnimator(elementsToAnimate);
  }, []);

  return (
    <section className="grid justify-items-center mt-8">
      <div className="my-10 grid max-w-screen-xl grid-cols-1 px-4 md:px-6 lg:px-8 lg:grid-cols-3">
        <div
          className="col-span-1 flex flex-col justify-center text-center sm:text-left md:pr-10"
          xyz="fade left-50% back-5 stagger-2"
          ref={descriptionContainer}
        >
          <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-medium xyz-nested xyz-out">
            What you can expect from us
          </h2>
          <p className="xyz-nested xyz-out">
            Our Web Development and Search Engine Optimization methods will help
            you connect with more customers than ever before - we're worth it
            Calgary!
          </p>
        </div>
        <div
          className="xyz-out col-span-2 mt-10 grid grid-cols-1 gap-10 rounded-2xl bg-neutral-content p-10 md:p-10 md:grid-cols-2 lg:mt-0 "
          xyz="fade small stagger-3 delay-2"
          ref={steps}
        >
          <div className="xyz-nested">
            <SMMChild
              step="01"
              headerText="Increase in Traffic"
              text="The point of a website is to drive traffic to your business, but sometimes businesses don't know how important Search Engine Optimization (SEO) is. Our experts here in Calgary have devised specific techniques for increasing your website's Google rankings! "
            />
          </div>
          <div className="xyz-nested">
            <SMMChild
              step="02"
              headerText="Highly Performant & Modernly Designed"
              text="A large majority of businesses receive their sales online; through their website - direct to consumer. In this digital age speed and performance is everything.. Well not everything... Looks matter too! "
            />
          </div>
          <div className="xyz-nested">
            <SMMChild
              step="03"
              headerText="Transparency"
              text="No hidden fees. We take pride in our work and reputation is very important to us, this is why we only develop with the best at heart. Calgary, you can trust us and expect complete transparency."
            />
          </div>
          <div className="xyz-nested">
            <SMMChild
              step="04"
              headerText="Excellent Customer Service"
              text="With 10+ years of Customer Service experience our Calgary based team wanted to create a greater impact in people's lives. We are truly passionate about developing beautiful websites, but more importantly, helping out amazing people."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
