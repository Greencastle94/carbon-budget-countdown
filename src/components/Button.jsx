import React from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  width: 219px;
  height: 46px;
  border: none;
  border-radius: 32px;
  background-color: #21245b;
  cursor: pointer;

  // Text
  color: #ffffff;
  font-size: 18px;
  font-family: var(--font-heading);
  letter-spacing: -0.9px;

  :hover {
    background-color: #272b74;
  }
`;

export default function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
