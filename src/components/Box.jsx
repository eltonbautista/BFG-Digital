import React, { Component } from "react";

export default function Box({ children }) {
  return <span className="sr-only">{children}</span>;
}
