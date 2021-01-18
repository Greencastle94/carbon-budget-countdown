import React from "react";
import styled from "@emotion/styled";

const StyledH2 = styled.h2`
  text-align: center;
  margin: calc(var(--header-height) + 30px) var(--side-margin-mobile) 0;
`;

export default function PageTitle({ children }) {
  return <StyledH2>{children}</StyledH2>;
}
