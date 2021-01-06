import React from "react";
import styled from "@emotion/styled";
import Bar from "../Charts/Bar";
import {
  getMilliSecondsLeftOfBudget,
  getCurrentBudget,
} from "../../utils/utils";
import { BUDGET_START_DATE, CURRENT_EMISSIONS, MONTHS } from "../../constants";

const Container = styled.div`
  margin-top: 18px;
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-family: var(--font-heading);
  color: var(--font-color-heading);
  margin-bottom: 24px;
  text-align: left;

  span {
    display: flex;
    text-decoration: underline;
  }
`;

const Graph = styled.div`
  display: flex;
  justify-content: space-between;
`;

const YearSteps = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  margin-left: 4%; // Needs to be adjusted manually on timeline changes

  @media (min-width: 768px) {
    margin-left: 11%;
  }
`;

const Year = styled.p`
  font-size: 14px;
  transform: rotate(-45deg);
  margin: 0;
`;

export default function Chart() {
  const currentYear = new Date().getFullYear();
  const millisecondsLeft = getMilliSecondsLeftOfBudget(
    getCurrentBudget(),
    CURRENT_EMISSIONS
  );
  const doomsDate = new Date(
    new Date(`Jan 1, ${currentYear} 00:00:00`).getTime() + millisecondsLeft
  );
  const doomsYear = doomsDate.getFullYear();

  const yearSteps = new Array(doomsYear - currentYear)
    .fill(0)
    .map((step, i) => currentYear + 1 + i);

  const barWidth = (CURRENT_EMISSIONS / getCurrentBudget()) * 100;

  return (
    <Container>
      <Description>
        Drar vi av lika mycket de kommande åren är budgeten slut:
        <span>{`${MONTHS[doomsDate.getMonth()]} ${doomsYear}`}</span>
      </Description>

      <Graph>
        {yearSteps.map((year, i) => (
          <Bar key={i} width={barWidth} />
        ))}
      </Graph>
      <YearSteps>
        {yearSteps.map((year, i) => (
          <Year key={i}>{year}</Year>
        ))}
      </YearSteps>
    </Container>
  );
}
