import React, { Component } from "react";
import Button, { ButtonTwo } from "../Button";
import TransitioningCard from "../TransitioningCard";

export default function WebDevelopmentSection() {
  return (
    <section className="grid">
      <div className="grid lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 w-full">
        <h2 className="lg:col-span-3 text-center text-base-content text-3xl sm:text-4xl font-bold xl:text-5xl mb-4 lg:mb-10 SEO">
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
        <div className="lg:col-span-3 grid max-w-4xl justify-self-center justify-center gap-2">
          <p className="text-center">
            When it comes to creating an aesthetically pleasing and highly
            performant website for your business, our developers and designers
            know no boundaries. And so, we <b>don't</b> use any CMS or Website
            Building templates to craft our work. This results in{" "}
            <span className="border-b-2 border-accent">you</span> receiving a{" "}
            <b>customized and uniquely inspired</b> website -{" "}
            <b>this is what sets us apart from the rest of the industry.</b>
          </p>
          {/* <Button title="Learn how we streamline your traffic" link="/" /> */}
          <ButtonTwo
            title="Learn about how website development and design works"
            link="/"
          />
        </div>
      </div>
    </section>
  );
}
