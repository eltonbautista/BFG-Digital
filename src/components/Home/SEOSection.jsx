import React, { Component, useEffect, useRef } from "react";
import Button, { ButtonTwo } from "../Button";

export default function SEOSection() {
  const heading = useRef(null);
  const paragraph = useRef(null);
  const button = useRef(null);
  const image = useRef(null);
  const caption = useRef(null);
  const elementsToAnimate = [heading, paragraph, button, image, caption];

  useEffect(() => {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("xyz-out");
          entry.target.classList.add("xyz-in");
          observer.unobserve(entry.target);
        }
      });
    });

    elementsToAnimate.forEach((el) => {
      observer.observe(el.current);
    });
  }, []);

  return (
    <section className="grid justify-items-center bg-neutral-content text-neutral pb-8 lg:pb-16 ">
      <div className="h-screen w-full">
        <div className="mx-auto max-w-screen-xl px-4 md:px-6 md:flex lg:px-8">
          <div className="relative mx-auto my-auto grid items-center">
            <div className="grid gap-2 lg:gap-4 mb-4 w-full">
              <h2
                className="text-left font-semibold leading-tight lg:text-5xl text-4xl xyz-out"
                ref={heading}
                xyz="fade-100% small"
              >
                Search Engine Optimization{" "}
                <span className="whitespace-nowrap">(SEO)</span>
              </h2>
              <div>
                <h3
                  className="mt-4 lg:mt-0 text-left text-base max-w-5xl xyz-out"
                  ref={paragraph}
                  xyz="fade-100% small delay-1"
                >
                  Calgary, Search Engine Optimization is the bread and butter of
                  a successful website and it is one of the most important
                  factors in increasing your business's traffic. At BFG Digital
                  we have cultivated a particular people culture that allows our
                  SEO specialists to work closely together with our developers &
                  designers.{" "}
                  <span className="font-semibold">
                    This allows us to maintain an organized and strategic
                    approach when dealing with Search Engine Optimization, which
                    results in maximal ranking value.
                  </span>
                </h3>
                <div
                  className="flex flex-col sm:flex-row sm:space-x-4 sm:px-0 xyz-out"
                  ref={button}
                  xyz="fade-100% flip-up flip-left delay-2"
                >
                  <Button title="Start Now" />
                  {/* <ButtonTwo link="/" title="" /> */}
                </div>
              </div>
            </div>
            <img
              className="xyz-out w-full h-full max-w-full max-h-full mb-2 object-cover"
              src="/images/best_performance_seo.webp"
              alt="Perfect Google Lighthouse Score"
              xyz=" fade-100% back-5 small perspective-3"
              ref={image}
            ></img>
            <span
              className="xyz-out font-semibold text-xs max-w-5xl justify-self-start"
              xyz=" fade-100% back-5 left-100% perspective-3 delay-0.5"
              ref={caption}
            >
              A client's website rated on Google's Lighthouse Analytics (a tool
              created by Google to assess a website's Performance, Search Engine
              Optimization (SEO), Best Practices (Security, Design) and
              Accessibility. a very important metric that can indicate a
              website's success!
            </span>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
