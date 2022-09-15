import React, { Component } from "react";
import Button, { ButtonTwo } from "../Button";
import TransitioningCard from "../TransitioningCard";

export default function WebDevelopmentSection() {
  return (
    <section className="grid">
      <div className="grid lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 w-full">
        <h2 className="lg:col-span-3 w-full justify-self-center text-base-content text-3xl sm:text-4xl font-semibold xl:text-5xl mb-4 lg:mb-10 SEO">
          Web Development & Web Design
        </h2>
        <TransitioningCard
          title="Developer & Designer Portfolio"
          imgOneSrc="/images/best_SEO.png"
          imgTwoSrc="/images/best_SEO_two.png"
          link="/"
          projectType="Website Development & Search Engine Optimization (SEO)"
        />
        <TransitioningCard
          title="Pet Grooming"
          imgOneSrc="/images/best_SEO_three.png"
          imgTwoSrc="/images/best_SEO_four.png"
          link="/"
          projectType="Website Development & Search Engine Optimization (SEO)"
        />
        <TransitioningCard
          title="SaaS Startup"
          imgOneSrc="/images/best_SEO_five.png"
          imgTwoSrc="/images/best_SEO_six.png"
          link="/"
          projectType="Website Development & Search Engine Optimization (SEO)"
        />
        <div className="lg:col-span-3 grid gap-2 max-w-5xl">
          <p className="">
            When it comes to creating an aesthetically pleasing and highly
            performant website for your business, our developers and designers
            know no boundaries. And so, we{" "}
            <span className="font-semibold">don't</span> use any CMS or Website
            Building templates to craft our work. This results in{" "}
            <span className="border-b-2 border-success">you</span> receiving a{" "}
            <span className="font-semibold">
              customized and uniquely inspired
            </span>{" "}
            website -{" "}
            <span className="font-semibold">
              this is what sets us apart from the rest of the industry.
            </span>
          </p>
          {/* <Button title="Learn how we streamline your traffic" link="/" /> */}
          <ButtonTwo title="Learn about our website design process" link="/" />
        </div>
      </div>
    </section>
  );
}
