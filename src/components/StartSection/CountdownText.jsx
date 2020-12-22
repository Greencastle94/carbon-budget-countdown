import React from "react";
import styled from "@emotion/styled";

const StyledCountdownText = styled.p`
  text-align: center;
  font-size: 20px;
  font-family: var(--font-heading);
  margin-bottom: 30px;

  @media (min-width: 768px) {
    margin-bottom: 100px;
  }
`;

export default function ContentWrapper({ children }) {
  return <StyledCountdownText>{children}</StyledCountdownText>;
}
