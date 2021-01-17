import React from "react";
import styled from "@emotion/styled";
import LinkImg from "../../static/external-link.svg";

const StyledLink = styled.a`
  display: flex;
  align-items: center;

  img {
    width: 16px;
    height: 16px;
    margin-left: 8px;
  }
`;

export default function ExternalLink({ children, href }) {
  return (
    <StyledLink href={href} target="_blank" rel="noopener noreferrer">
      {children} <img src={LinkImg} alt="" />
    </StyledLink>
  );
}
