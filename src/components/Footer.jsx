import React from "react";
import styled from "@emotion/styled";
import Circle from "../components/Circle";

const StyledFooter = styled.footer`
  position: relative;
  overflow: hidden;
  height: 200px;
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

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Footer({ children }) {
  return (
    <StyledFooter>
      <Circle
        color="var(--secondary-color)"
        size={`${200}vw`}
        left={`${50}%`}
        top={`${0}%`}
      />
      <Circle
        color="var(--primary-color)"
        size={`${50}px`}
        left={`${20}%`}
        top={`${35}%`}
      />
      <Circle
        color="var(--primary-color)"
        size={`${350}px`}
        left={`${100}%`}
        top={`${35}%`}
      />
      <Content>{children}</Content>
    </StyledFooter>
  );
}
