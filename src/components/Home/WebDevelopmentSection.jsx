import React, { Component, useRef, useEffect } from "react";
import Button, { ButtonTwo } from "../Button";
import TransitioningCard from "../TransitioningCard";
import intersectionAnimator from "../../helpers/intersectionAnimator";

export default function WebDevelopmentSection() {
  const heading = useRef(null);
  const cardOne = useRef(null);
  const cardTwo = useRef(null);
  const cardThree = useRef(null);
  const cTA = useRef(null);

  const elementsToAnimate = [heading, cardOne, cardTwo, cardThree, cTA];

  useEffect(() => {
    intersectionAnimator(elementsToAnimate);
  }, []);

  return (
    <section className="grid">
      <div
        className="grid lg:grid-cols-3 lg:gap-4 max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 w-full"
        xyz="stagger-2 fade back-5 left-100% perspective-3"
      >
        <h2
          className="lg:col-span-3 w-full justify-self-center text-base-content text-3xl sm:text-4xl font-semibold xl:text-5xl mb-4 lg:mb-10 SEO xyz-out"
          ref={heading}
        >
          Web Development & Web Design
        </h2>
        <div ref={cardOne} className="xyz-out mb-6">
          <TransitioningCard
            title="Developer & Designer Portfolio"
            imgOneSrc="/images/best_SEO.webp"
            imgTwoSrc="/images/best_SEO_two.webp"
            link="/"
            projectType="Website Development & Search Engine Optimization (SEO)"
          />
        </div>
        <div ref={cardTwo} className="xyz-out mb-6">
          <TransitioningCard
            title="Pet Grooming"
            imgOneSrc="/images/best_SEO_three.webp"
            imgTwoSrc="/images/best_SEO_four.webp"
            link="/"
            projectType="Website Development & Search Engine Optimization (SEO)"
          />
        </div>
        <div ref={cardThree} className="xyz-out mb-6">
          <TransitioningCard
            title="SaaS Startup"
            imgOneSrc="/images/best_SEO_five.webp"
            imgTwoSrc="/images/best_SEO_six.webp"
            link="/"
            projectType="Website Development & Search Engine Optimization (SEO)"
          />
        </div>
        <div
          className="lg:col-span-3 grid gap-2 max-w-5xl xyz-out mt-4 lg:pt-0 border-t-2 border-primary pt-6 lg:p-0 lg:border-t-0"
          ref={cTA}
        >
          <p className="">
            When it comes to creating an aesthetically pleasing and highly
            performant website for your business, our developers and designers
            know no boundaries. And so, we{" "}
            <span className="font-medium">don't</span> use any CMS or Website
            Building templates to craft our work. This results in{" "}
            <span className="border-b-2 border-primary">you</span> receiving a{" "}
            <span className="font-medium">
              customized and uniquely inspired
            </span>{" "}
            website -{" "}
            <span className="font-medium">
              this is what sets us apart from the rest of the industry.
            </span>
          </p>
          <ButtonTwo link="/calgary-web-design-company/web-development">
            Learn about our website design process
          </ButtonTwo>
        </div>
      </div>
    </section>
  );
}
