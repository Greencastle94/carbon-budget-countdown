import React from "react";
import styled from "@emotion/styled";

const StyledContentWrapper = styled.div`
  margin: 40px 16px;
`;

export default function ContentWrapper({ children }) {
  return <StyledContentWrapper>{children}</StyledContentWrapper>;
}
