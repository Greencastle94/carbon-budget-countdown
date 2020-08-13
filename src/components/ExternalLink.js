import React from "react";
import styled from "@emotion/styled";
import linkSVG from "../../static/link.svg";

const LinkImg = styled.img`
  height: 14px;
`;

export default function ExternalLink({ children, href }) {
  return (
    <a href={href}>
      {children} <LinkImg src={linkSVG} alt="" />
    </a>
  );
}
