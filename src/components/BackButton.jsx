import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import arrowImg from "../../static/arrow-right.svg";

const StyledBackButton = styled(Link)`
  display: block;
  margin-top: 48px;

  font-family: var(--font-heading);
  font-weight: bold;
  color: var(--font-color-paragraph);

  &:hover {
    text-decoration: underline;
  }

  img {
    transform: rotate(180deg);
    margin-right: 1rem;
  }
`;

export default function BackButton({ to }) {
  return (
    <StyledBackButton to={to}>
      <img src={arrowImg} alt="" />
      Tillbaka
    </StyledBackButton>
  );
}
