import React, { Component } from "react";

export default function FooterLink({ url, title, underline }) {
  return (
    <>
      {underline ? (
        <a
          className={
            "inline-block underline transition hover:text-secondary-content/75"
          }
          href={url}
        >
          {title}
        </a>
      ) : (
        <li>
          <a
            className={
              "inline-block transition hover:text-secondary-content/75"
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
