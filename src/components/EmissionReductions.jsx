import React from "react";
import styled from "@emotion/styled";
import {
  YEARLY_EMISSIONS,
  CURRENT_DATA_YEAR,
  NECESSARY_REDUCTION_RATE,
} from "../constants";

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

export default function Chart() {
  let percentage =
    Math.round(
      ((YEARLY_EMISSIONS[CURRENT_DATA_YEAR - 1] -
        YEARLY_EMISSIONS[CURRENT_DATA_YEAR]) /
        YEARLY_EMISSIONS[CURRENT_DATA_YEAR - 1]) *
        100 *
        10
    ) / 10;
  percentage = percentage > 0 ? -percentage : percentage;

  return (
    <Container>
      <UpperContainer>
        <p className="current">{`Utsläppsminskning ${
          CURRENT_DATA_YEAR - 1
        }/${CURRENT_DATA_YEAR}`}</p>
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
