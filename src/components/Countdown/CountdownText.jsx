import React from "react";
import styled from "@emotion/styled";
import arrowImg from "../../../static/down-arrow.svg";

const StyledCountdownText = styled.div`
  text-align: center;
  margin-bottom: 30px;

  p {
    font-size: 20px;
    font-family: var(--font-heading);
  }
`;

export default function ContentWrapper({ children }) {
  return (
    <StyledCountdownText>
      <p>{children}</p>
      <img
        style={{ width: "20px", display: "block", margin: "auto" }}
        src={arrowImg}
        alt=""
      />
    </StyledCountdownText>
  );
}
