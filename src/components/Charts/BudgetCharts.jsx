import React from "react";
import styled from "@emotion/styled";
import Bar from "../Charts/Bar";

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

export default function BudgetCharts({
  currentEmissions,
  currentYear,
  currentBudget,
}) {
  const smallBarWidth = (currentEmissions / currentBudget) * 100;

  return (
    <Container>
      <Graph number={currentBudget} width={100}>
        Total kvarstående Co2-buget:
      </Graph>
      <Graph
        number={currentEmissions}
        width={smallBarWidth}
      >{`Sveriges Co2-utsläpp ${currentYear}:`}</Graph>
    </Container>
  );
}
