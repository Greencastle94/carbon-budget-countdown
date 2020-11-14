import React from "react";
import styled from "@emotion/styled";

const StyledHeader = styled.header`
  display: flex;
  margin-top: 20px;

  h1,
  p {
    font-size: 16px;
    font-weight: normal;
    font-family: var(--font-heading);
    color: var(--font-color-header);
    margin: auto;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Klimatklockan</h1>
      <p>Sverige</p>
    </StyledHeader>
  );
}
