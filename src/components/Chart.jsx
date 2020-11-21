import React from "react";
import styled from "@emotion/styled";
import { VictoryBar } from "victory";

const ChartH3 = styled.h3`
  font-size: 16px;
  font-weight: normal;
  font-family: var(--font-heading);
  color: var(--font-color-heading);
  margin-bottom: 24px;
`;

const ChartP = styled.p`
  font-size: 14px;
  font-family: var(--font-heading);
  color: var(--font-color-paragraph);
`;

const StyledChartDescription = styled.div`
  text-align: left;
  position: absolute;
  top: ${props => `${props.position}px`};
`;

const ChartDescription = ({ children, position, number }) => {
  return (
    <StyledChartDescription position={position}>
      <ChartH3>{children}</ChartH3>
      <ChartP>{`${(number * 1000000).toLocaleString("se-SE", {
        minimumFractionDigits: 0,
      })} ton`}</ChartP>
    </StyledChartDescription>
  );
};

const ChartContainer = styled.div`
  position: relative;
  padding: 24px 0;
  margin: 36px 0;
`;

export default function Chart({
  currentEmissions,
  currentYear,
  currentBudget,
}) {
  return (
    <ChartContainer>
      <ChartDescription position={-20} number={currentBudget}>
        Total kvarstående Co2-buget:
      </ChartDescription>
      <ChartDescription
        position={70}
        number={currentEmissions}
      >{`Sveriges Co2-utsläpp ${currentYear}:`}</ChartDescription>
      <VictoryBar
        data={[currentEmissions, currentBudget]}
        horizontal
        height={130}
        barWidth={10}
        padding={{ top: 5, right: 0, bottom: 5, left: 0 }}
        cornerRadius={{
          topLeft: 5,
          topRight: 5,
          bottomLeft: 5,
          bottomRight: 5,
        }}
        style={{
          data: {
            fill: "var(--secondary-color)",
          },
        }}
      />
    </ChartContainer>
  );
}
