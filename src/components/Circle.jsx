import React from "react";
import styled from "@emotion/styled";

const StyledCircle = styled.div`
  height: ${props => props.size};
  width: ${props => props.size};
  border-radius: 50%;
  background-color: ${props => props.color};

  position: absolute;
  transform: translateX(-50%);
  left: ${props => props.left};
  top: ${props => props.top};
  z-index: -1;
`;

export default function Circle({ color, size, left, top }) {
  return <StyledCircle color={color} size={size} left={left} top={top} />;
}
