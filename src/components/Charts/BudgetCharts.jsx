import React from "react";
import styled from "@emotion/styled";
import { VictoryBar } from "victory";

const DescriptionH3 = styled.h3`
  margin-bottom: 24px;
`;

const DescriptionP = styled.p`
  font-size: 14px;
  font-family: var(--font-heading);
  color: var(--font-color-paragraph);
`;

const StyledDescription = styled.div`
  text-align: left;
  position: absolute;
  top: ${props => `${props.position}px`};
`;

const Description = ({ children, position, number }) => {
  return (
    <StyledDescription position={position}>
      <DescriptionH3>{children}</DescriptionH3>
      <DescriptionP>{`${(number * 1000000).toLocaleString("se-SE", {
        minimumFractionDigits: 0,
      })} ton`}</DescriptionP>
    </StyledDescription>
  );
};

const Container = styled.div`
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
    <Container>
      <Description position={-4} number={currentBudget}>
        Total kvarstående Co2-buget:
      </Description>
      <Description
        position={86}
        number={currentEmissions}
      >{`Sveriges Co2-utsläpp ${currentYear}:`}</Description>
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
    </Container>
  );
}
