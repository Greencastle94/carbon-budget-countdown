import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  p {
    margin: 0;
  }

  .current {
    color: var(--font-color-heading);
  }

  @media (min-width: 768px) {
    margin: 0;
  }
`;

const UpperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: ${props => props.percentage - 6 + "%"};
  margin-top: 8px;
`;

const BigBar = styled.div`
  position: relative;
  height: 10px;
  width: 100%;
  background-color: var(--primary-color);
`;

const YearlyEmissions = styled.div`
  position: absolute;
  height: 100%;
  width: ${props => props.percentage + "%"};
  background-color: var(--secondary-color);
`;

const NECESSARY_REDUCTION_RATE = -12;

export default function Chart({ currentYear, yearlyEmissions }) {
  let percentage =
    Math.round(
      ((yearlyEmissions[currentYear - 1] - yearlyEmissions[currentYear]) /
        yearlyEmissions[currentYear - 1]) *
        100 *
        10
    ) / 10;
  percentage = percentage > 0 ? -percentage : percentage;

  return (
    <Container>
      <UpperContainer>
        <p className="current">{`Utsläppsminskning ${
          currentYear - 1
        }/${currentYear}`}</p>
        <p className="target">{`${NECESSARY_REDUCTION_RATE} %`}</p>
      </UpperContainer>
      <BigBar>
        <YearlyEmissions
          percentage={(percentage / NECESSARY_REDUCTION_RATE) * 100}
        />
      </BigBar>
      <BottomContainer
        percentage={(percentage / NECESSARY_REDUCTION_RATE) * 100}
      >
        <p className="current">{`${percentage} %`}</p>
        <p className="target">{`Parisavtalet kräver`}</p>
      </BottomContainer>
    </Container>
  );
}
