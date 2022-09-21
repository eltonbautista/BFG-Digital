import React, { Component } from "react";
import { companyName } from "../../helpers/companyName";
import Button, { ButtonTwo } from "../Button";

export default function ContactForm() {
  return (
    <section className="grid justify-items-center py-8" id="contact">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-3 lg:mb-10">
        Contact Us
      </h2>
      <div className="grid lg:grid-cols-2 w-full justify-items-center max-w-screen-xl px-4 md:px-6 lg:px-8">
        <div className=" lg:max-w-md SEO mb-4 lg:mb-0 lg:justify-self-end">
          <h3 className="text-base lg:text-lg xl:text-xl lg:text-end">
            Let's talk about how {companyName} can generate value for your
            business - a conversation never hurt{" "}
            <span className="border-b-2 border-accent">anyone</span>.
          </h3>
        </div>
        <div className=" rounded-lg  lg:p-12 lg:pt-0 max-w-screen-xl w-full">
          <form
            action="https://bfginteractive.us10.list-manage.com/subscribe/post"
            method="POST"
            className="space-y-4 text-neutral"
          >
            <input type="hidden" name="u" value="80aba07a99b3202fcbaa8eb66" />
            <input type="hidden" name="id" value="47a1d2ea8d" />
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-3 text-sm border-accent rounded-lg "
                placeholder="Name"
                type="text"
                name="MERGE1"
                id="MERGE1"
                required
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full p-3 text-sm border-accent rounded-lg "
                  placeholder="Email address"
                  type="email"
                  autoCapitalize="off"
                  autoCorrect="off"
                  required
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full p-3 text-sm border-accent rounded-lg"
                  placeholder="Phone Number"
                  type="tel"
                  name="MERGE6"
                  id="MERGE6"
                  required
                />
              </div>
            </div>
            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full p-3 text-sm border-accent rounded-lg"
                placeholder="Message"
                rows="8"
                name="MERGE2"
                id="MERGE2"
                required
              ></textarea>
            </div>
            <div className="mt-4 text-primary-content">
              <Button type="submit" title="Send request" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
