import React, { Component } from "react";
import TransitioningCard from "../TransitioningCard";

export default function WebDevelopmentSection() {
  return (
    <section className="grid text-neutral">
      <div className="grid lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 class="lg:col-span-3 text-center text-base-content text-3xl sm:text-4xl font-bold xl:text-5xl mb-4 lg:mb-10">
          Web Development & Web Design
        </h1>
        <TransitioningCard
          title="personal portfolio"
          imgOneSrc="https://i.postimg.cc/nr2ZsHFs/vector-One.jpg"
          imgTwoSrc="https://i.postimg.cc/nr2ZsHFs/vector-One.jpg"
          link="/"
          projectType="Web Development"
        />
        <TransitioningCard
          title="personal portfolio"
          imgOneSrc="https://i.postimg.cc/nr2ZsHFs/vector-One.jpg"
          imgTwoSrc="https://i.postimg.cc/nr2ZsHFs/vector-One.jpg"
          link="/"
          projectType="Web Development"
        />
        <TransitioningCard
          title="personal portfolio"
          imgOneSrc="https://i.postimg.cc/nr2ZsHFs/vector-One.jpg"
          imgTwoSrc="https://i.postimg.cc/nr2ZsHFs/vector-One.jpg"
          link="/"
          projectType="Web Development"
        />
      </div>
    </section>
  );
}
