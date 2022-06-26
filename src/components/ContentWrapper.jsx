import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const centeringText = css`
  text-align: center;
`;

const darkTheme = css`
  background-color: var(--primary-color);

  h2,
  p {
    color: var(--background-color);
  }
`;

const Background = styled.div`
  position: relative;
  overflow: hidden;

  ${props => props.dark && darkTheme}
  ${props => props.center && centeringText}
`;

const Content = styled.div`
  padding: 50px var(--side-margin-mobile);
  margin: auto;
  max-width: 1140px;

  > p,
  h2 {
    max-width: 700px;
    margin: auto;
  }

  > h2 {
    margin-bottom: 8px;
  }

  @media (min-width: 768px) {
    padding-right: 0;
    padding-left: 0;
  }
`;

export default function ContentWrapper({ center, dark, style, children }) {
  return (
    <Background center={center} dark={dark} style={style}>
      <Content>{children}</Content>
    </Background>
  );
}
