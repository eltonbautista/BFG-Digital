import React, { Component } from "react";

function FooterLink({ url, title, underline }) {
  return (
    <>
      {underline ? (
        <a
          className={
            "inline-block text-secondary-content underline transition hover:text-secondary-content/75"
          }
          href={url}
        >
          {title}
        </a>
      ) : (
        <li>
          <a
            className={
              "inline-block text-secondary-content transition hover:text-secondary-content/75"
            }
            href={url}
          >
            {title}
          </a>
        </li>
      )}
    </>
  );
}

export default FooterLink;
