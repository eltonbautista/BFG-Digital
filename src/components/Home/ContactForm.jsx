import React, { Component } from "react";

export default function ContactForm() {
  return (
    <section className="grid justify-items-center text-base-content py-8">
      <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-3 lg:mb-10">
        Contact Us
      </h1>
      <div className="grid lg:grid-cols-2 w-full justify-items-center max-w-screen-xl px-4 lg:px-8">
        <div className=" lg:max-w-md SEO mb-4 lg:mb-0 lg:justify-self-end">
          <h2 className="text-base lg:text-lg xl:text-xl lg:text-end">
            Let's talk about how we can generate value for your business - a
            conversation doesn't hurt anyone.
          </h2>
        </div>
        <div className=" rounded-lg  lg:p-12 lg:pt-0 max-w-screen-xl w-full">
          <form action="" className="space-y-4 text-neutral">
            <div>
              <label className="sr-only" for="name">
                Name
              </label>
              <input
                className="w-full p-3 text-sm border-accent rounded-lg "
                placeholder="Name"
                type="text"
                id="name"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" for="email">
                  Email
                </label>
                <input
                  className="w-full p-3 text-sm border-accent rounded-lg "
                  placeholder="Email address"
                  type="email"
                  id="email"
                />
              </div>
              <div>
                <label className="sr-only" for="phone">
                  Phone
                </label>
                <input
                  className="w-full p-3 text-sm border-accent rounded-lg"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                />
              </div>
            </div>
            <div>
              <label className="sr-only" for="message">
                Message
              </label>
              <textarea
                className="w-full p-3 text-sm border-accent rounded-lg"
                placeholder="Message"
                rows="8"
                id="message"
              ></textarea>
            </div>
            <div className="mt-4">
              <button
                type="button"
                className="group inline-flex items-center font-semibold px-1 lg:mt-4 md:mt-1 hover:text-accent text-base-content"
              >
                Send Request
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:translate-x-2 ml-4 h-6 w-6 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
