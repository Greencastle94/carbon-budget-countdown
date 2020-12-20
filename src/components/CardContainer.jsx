import React from "react";
import styled from "@emotion/styled";

const StyledCard = styled.div`
  margin-top: 32px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;
  }
`;

export default function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}
