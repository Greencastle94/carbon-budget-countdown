import React from "react";
import styled from "@emotion/styled";

const StyledContentWrapper = styled.div`
  margin: 0px 16px;
`;

export default function ContentWrapper({ style, children }) {
  return <StyledContentWrapper style={style}>{children}</StyledContentWrapper>;
}
