import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const centeringText = css`
  text-align: center;
`;

const darkTheme = css`
  background-color: var(--primary-color);

  p {
    color: var(--font-color-heading);
  }
`;

const StyledContentWrapper = styled.div`
  padding: 50px 16px;

  ${props => props.center && centeringText}
  ${props => props.dark && darkTheme}
`;

export default function ContentWrapper({ center, dark, style, children }) {
  return (
    <StyledContentWrapper center={center} dark={dark} style={style}>
      {children}
    </StyledContentWrapper>
  );
}
