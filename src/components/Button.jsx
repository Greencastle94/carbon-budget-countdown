import React from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  width: 219px;
  height: 46px;
  border: none;
  border-radius: 32px;
  background-color: ${props =>
    props.isCTA ? "var(--CTA-color)" : "var(--secondary-color)"};
  cursor: pointer;

  // Text
  color: ${props => (props.isCTA ? "#ffffff" : "#ffffff")};
  font-size: 18px;
  font-family: var(--font-heading);
  letter-spacing: -0.9px;

  :hover {
    background-color: ${props => (props.isCTA ? "#509e52" : "#1f1f1f")};
  }
`;

export default function Button({ children, onClick, isCTA }) {
  return (
    <StyledButton onClick={onClick} isCTA={isCTA}>
      {children}
    </StyledButton>
  );
}
