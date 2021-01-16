import React from "react";
import SEO from "./seo";
import { Helmet } from "react-helmet";
import TrackingNotice from "./TrackingNotice";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
      <Header />
      <main>{children}</main>
      <Footer>
        <nav>
          <a href="/about">Om Klimatklockan</a>
          <a href="/sources">Källor</a>
        </nav>
        <p>Kontakt: klimatklockan@gmail.com</p>
      </Footer>
      <TrackingNotice />
    </>
  );
}
