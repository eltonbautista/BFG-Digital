import React, { Component, useEffect, useRef } from "react";
import ValuesChild from "./ValuesChild";
import intersectionAnimator from "../../helpers/intersectionAnimator";
import { companyName } from "../../helpers/companyName";

export default function AboutMe() {
  const heading = useRef(null);
  const pOne = useRef(null);
  const pTwo = useRef(null);
  const image = useRef(null);
  const headingTwo = useRef(null);
  const valueOne = useRef(null);
  const valueTwo = useRef(null);
  const valueThree = useRef(null);
  const elementsToAnimate = [heading, pOne, pTwo, image, headingTwo, valueOne];

  useEffect(() => {
    intersectionAnimator(elementsToAnimate);
  }, []);

  return (
    <section className="bg-neutral-content text-neutral" id="about">
      <div className="py-6 sm:py-8 lg:py-12 ">
        <div className="mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div
              className="md:pt-8 lg:flex lg:flex-col lg:justify-center"
              xyz="stagger fade down-100% back-5"
            >
              <div className="xyz-out" ref={heading}>
                <p className="font-bold md:text-left ">Who we are</p>

                <h3 className="mb-4 text-2xl md:text-3xl font-medium text-neutral md:mb-6 md:text-left ">
                  {companyName} is a Calgary based website design and
                  development team. Our goal is simple: to create attractive and
                  highly performant websites to help drive traffic to and for
                  your business!
                </h3>
              </div>

              <p className="mb-4 sm:text-lg xyz-out" ref={pOne}>
                Our team loves Calgary, we are a group of developers and
                designers who love creating value for other businesses alike.
                And so, we created {companyName}.
              </p>
              <p className="mb-6 sm:text-lg xyz-out" ref={pTwo}>
                We are truly passionate about the work that we do. We can
                proudly say that we put the time, effort, and dedication
                required into each and every single project that we get the
                privilege of working on. Why? Because it's the only way that
                makes sense to us.
              </p>
            </div>
            <div>
              <div
                className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto xyz-out"
                xyz="duration-6 fade short-100% delay-10"
                ref={image}
              >
                <img
                  src="/images/calgary_website_design.webp"
                  loading="lazy"
                  alt={`The city of Calgary where ${companyName} is based`}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="container mx-auto w-full max-w-screen-xl border-t border-neutral border-solid ">
                <div
                  className="grid w-full pt-10 pb-5 xyz-out"
                  ref={headingTwo}
                  xyz="fade-100% small delay-0.5"
                >
                  <h3 className="text-center text-2xl md:text-3xl font-medium">
                    Our Founding Values
                  </h3>
                  <q className="mx-auto mb-4 max-w-xl py-2 text-center text-sm">
                    There is something fundamentally wrong with the process if
                    the cornerstones of our society are afraid to trust in one
                    another. We need to be the change we want to see in this
                    world.
                  </q>
                </div>
                <div
                  className="xyz-out flex flex-col lg:flex-row md:gap-6"
                  xyz="fade-100% small stagger-3 delay-2"
                  ref={valueOne}
                >
                  <ValuesChild headerText="INNOVATE">
                    {companyName} embraces change. We understand that times are
                    rapidly changing and we make sure to take the measures
                    necessary to provide our clients with the best value
                    possible. Period.
                  </ValuesChild>

                  <ValuesChild headerText="GROW">
                    As a growing business ourself, we understand how critical
                    growth is. With our dedicated and passionate team, we are
                    determined to provide a stunning website design for your
                    business that will surely set you apart from the rest.
                  </ValuesChild>

                  <ValuesChild headerText="SERVE">
                    We know how important customer service is, no really, we do.
                    And so, when you choose to work with {companyName} we make
                    sure to impart you with a stress-free, fun, and valuable
                    learning experience.
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
