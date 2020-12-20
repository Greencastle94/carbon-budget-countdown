import React from "react";
import styled from "@emotion/styled";

const StyledCountdownText = styled.p`
  text-align: center;
  font-size: 20px;
  font-family: var(--font-heading);
  margin-bottom: 30px;
`;

export default function ContentWrapper({ children }) {
  return <StyledCountdownText>{children}</StyledCountdownText>;
}
