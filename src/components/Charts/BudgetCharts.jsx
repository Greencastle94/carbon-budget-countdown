import React from "react";
import styled from "@emotion/styled";
import Bar from "../Charts/Bar";
import { getCurrentBudget } from "../../utils/utils";
import { CURRENT_EMISSIONS, CURRENT_DATA_YEAR } from "../../constants";

const Container = styled.div`
  margin: 36px 0;
`;

const GraphContainer = styled.div`
  text-align: left;
  margin-bottom: 32px;
`;

const Title = styled.h3`
  margin-bottom: 8px;
`;

const Description = styled.p`
  margin-top: 8px;
  font-size: 14px;
  font-family: var(--font-heading);
  color: var(--font-color-paragraph);
`;

const Graph = ({ children, number, width }) => {
  return (
    <GraphContainer>
      <Title>{children}</Title>
      <Bar width={width} />
      <Description>{`${(number * 1000000).toLocaleString("se-SE", {
        minimumFractionDigits: 0,
      })} ton`}</Description>
    </GraphContainer>
  );
};

export default function BudgetCharts() {
  const smallBarWidth = (CURRENT_EMISSIONS / getCurrentBudget()) * 100;

  return (
    <Container>
      <Graph number={getCurrentBudget()} width={100}>
        Total kvarstående CO<sub>2</sub>-budget:
      </Graph>
      <Graph number={CURRENT_EMISSIONS} width={smallBarWidth}>
        Sveriges CO<sub>2</sub>-utsläpp {CURRENT_DATA_YEAR}:
      </Graph>
    </Container>
  );
}
