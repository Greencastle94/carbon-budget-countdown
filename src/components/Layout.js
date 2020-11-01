import React from "react";
import SEO from "./seo";
import { Helmet } from "react-helmet";
import TrackingNotice from "./TrackingNotice";
import "../global.css";

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <SEO />
      <main>
        {children}
        <TrackingNotice />
      </main>
    </>
  );
}
