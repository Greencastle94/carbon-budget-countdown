import React from "react";
import styled from "@emotion/styled";
import Circle from "../components/Circle";

const StyledFooter = styled.footer`
  position: relative;
  overflow: hidden;
  height: 500px;
  padding-top: 48px;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;

  a {
    font-size: 16px;
    font-family: var(--font-heading);
    color: var(--primary-color);
    text-decoration: none;
    margin-bottom: 16px;
  }
`;

export default function Footer({ children }) {
  return (
    <StyledFooter>
      <Circle
        color="var(--secondary-color)"
        size={`${1000}px`}
        left={`${50}%`}
        top={`${0}%`}
      />
      <Circle
        color="var(--primary-color)"
        size={`${50}px`}
        left={`${20}%`}
        top={`${25}%`}
      />
      <Circle
        color="var(--primary-color)"
        size={`${350}px`}
        left={`${100}%`}
        top={`${25}%`}
      />
      <Content>{children}</Content>
    </StyledFooter>
  );
}
