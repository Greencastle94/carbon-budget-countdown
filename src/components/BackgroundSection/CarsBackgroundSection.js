import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "@emotion/styled";

import BackgroundImage from "gatsby-background-image";

function BackgroundSection({ className, children }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "cars.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 4320) {
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

const CarsBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-size: cover;
`;

export default CarsBackgroundSection;
