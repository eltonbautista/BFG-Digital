import React, { Component } from "react";
import Hero from "./HomeHero";
import Features from "./Features";
import AboutMe from "./AboutMe";
import WebDevelopmentSection from "./WebDevelopmentSection";
import SEOSection from "./SEOSection";
import ContactForm from "./ContactForm";
import SMMSection from "./SMMSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />

      <svg
        className="text-neutral-content fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path d="M0,256L1440,128L1440,320L0,320Z"></path>
      </svg>
      <AboutMe />
      <svg
        className="text-neutral-content fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path d="M0,256L1440,128L1440,0L0,0Z"></path>
      </svg>

      <WebDevelopmentSection />
      <svg
        className="text-neutral-content fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path d="M0,256L1440,128L1440,320L0,320Z"></path>
      </svg>
      <SEOSection />
      <SMMSection />
      <div className="bg-neutral text-secondary-content">
        <ContactForm />
      </div>
    </main>
  );
}
