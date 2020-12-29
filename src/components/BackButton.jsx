import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import arrowImg from "../../static/arrow-right.svg";

const StyledBackButton = styled(Link)`
  display: flex;
  margin: 2rem 16px 0;
  max-width: 1140px;
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

  @media (min-width: 768px) {
    margin: 30px auto;
    margin-bottom: 0;
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
