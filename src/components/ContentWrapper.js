import React from "react";
import styled from "@emotion/styled";

const StyledContentWrapper = styled.div`
  margin: 60px 16px;
  max-width: 1140px;

  @media (min-width: 768px) {
    margin: 80px auto;
  }
`;

export default function ContentWrapper({ style, children }) {
  return <StyledContentWrapper style={style}>{children}</StyledContentWrapper>;
}
