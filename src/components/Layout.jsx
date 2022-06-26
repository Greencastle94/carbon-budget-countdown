import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TrackingNotice from "./TrackingNotice";
import Seo from "./seo";
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
        <script
          src="https://unpkg.com/website-carbon-badges@1.1.1/b.min.js"
          defer
        />
      </Helmet>
      <Seo />
      <Header />
      <main>{children}</main>
      <Footer>
        <nav>
          <a href="/learn-more">Jag vill lära mig mer</a>
          <a href="/about">Om Klimatklockan</a>
          <a href="/sources">Källor</a>
        </nav>
        <p>Kontakt: klimatklockan@gmail.com</p>
        <div id="wcb" className="carbonbadge"></div>
        <StaticQuery
          query={graphql`
            query {
              desktop: file(relativePath: { eq: "green-hosting.png" }) {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          `}
          render={data => {
            const imageData = data.desktop.childImageSharp.fluid;
            return (
              <Img
                style={{ width: "280px", margin: "0 auto 20px" }}
                fluid={imageData}
                alt="This website is hosted Green - checked by thegreenwebfoundation.org"
              />
            );
          }}
        />
      </Footer>
      <TrackingNotice />
    </>
  );
}
