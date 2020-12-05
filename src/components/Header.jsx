import React from "react";
import styled from "@emotion/styled";
import flagImg from "../../static/flag.svg";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;

  h1,
  p {
    font-size: 16px;
    font-weight: normal;
    font-family: var(--font-heading);
    color: var(--font-color-header);
    margin: auto;
  }

  .text {
    display: flex;

    img {
      width: 24px;
      margin-right: 8px;
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <div>
        <h1>Klimatklockan</h1>
      </div>
      <div className="text">
        <img src={flagImg} alt="" />
        <p>Sverige</p>
      </div>
    </StyledHeader>
  );
}
