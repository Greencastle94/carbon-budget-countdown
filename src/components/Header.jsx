import React from "react";
import styled from "@emotion/styled";
import logo from "../../static/klimatklockan.svg";
import flagImg from "../../static/flag.svg";
import { Link } from "gatsby";

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: var(--background-color);
  z-index: 1;

  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  box-shadow: 0 0 20px 30px rgba(0, 0, 0, 1);

  h1,
  p {
    font-size: 16px;
    font-weight: normal;
    font-family: var(--font-heading);
    color: var(--font-color-paragraph);
    margin: auto;
  }

  a {
    &:hover {
      text-decoration: none;
    }
  }

  .text {
    display: flex;
    align-items: center;

    img {
      height: 20px;
      margin-right: 8px;
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <div className="text">
          <img src={logo} alt="" width="20" />
          <p>Klimatklockan</p>
        </div>
      </Link>
      <div className="text">
        <img src={flagImg} alt="" />
        <p>Sverige</p>
      </div>
    </StyledHeader>
  );
}
