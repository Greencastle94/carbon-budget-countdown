import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "@emotion/styled";

import BackgroundImage from "gatsby-background-image";

function BackgroundSection({ className, children }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "aviation.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        const imageData = data.desktop.childImageSharp.fluid;
        return (
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={`#040e18`}
          >
            {children}
          </BackgroundImage>
        );
      }}
    />
  );
}

const AviationBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-size: cover;
`;

export default AviationBackgroundSection;
