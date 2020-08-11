import React from "react";
import SEO from "../components/seo";
import TrackingNotice from "../components/TrackingNotice";
import "../global.css";

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <main>
        {children}
        <TrackingNotice />
      </main>
    </>
  );
}
