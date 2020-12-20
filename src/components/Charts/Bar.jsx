import styled from "@emotion/styled";

const Bar = styled.div`
  height: 10px;
  width: ${props => props.width + "%"};
  background-color: var(--secondary-color);
`;

export default Bar;
