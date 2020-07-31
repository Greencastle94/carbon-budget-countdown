import React from "react";
import SEO from "../components/seo";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <main>{children}</main>
    </>
  );
}
