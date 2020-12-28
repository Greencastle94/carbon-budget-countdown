import React from "react";
import styled from "@emotion/styled";
import Circle from "../components/Circle";

const StyledFooter = styled.footer`
  position: relative;
  overflow: hidden;
  padding: 48px 0 16px;
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
    margin: auto;
    margin-bottom: 16px;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    color: var(--primary-color);
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
      <Content>{children}</Content>
    </StyledFooter>
  );
}
