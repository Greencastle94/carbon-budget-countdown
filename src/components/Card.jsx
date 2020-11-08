import React from "react";
import styled from "@emotion/styled";

const StyledCard = styled.div`
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(99, 99, 99, 0.2);
`;

export default function Card({ children }) {
  return (
    <StyledCard >
      {children}
    </StyledCard>
  );
}
