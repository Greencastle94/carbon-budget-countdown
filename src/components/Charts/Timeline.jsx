import React from "react";
import styled from "@emotion/styled";
import { VictoryBar, VictoryStack } from "victory";
import { getMilliSecondsLeftOfBudget } from "../../utils/utils";

const MONTHS = [
  "Januari",
  "Februari",
  "Mars",
  "April",
  "Maj",
  "Juni",
  "Juli",
  "Augusti",
  "September",
  "Oktober",
  "November",
  "December",
];

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

export default function Chart({
  startDate,
  currentEmissions,
  currentYear,
  currentBudget,
}) {
  const millisecondsLeft = getMilliSecondsLeftOfBudget(
    currentBudget,
    currentEmissions
  );
  const doomsDate = new Date(startDate.getTime() + millisecondsLeft);
  const doomsYear = doomsDate.getFullYear();

  const yearSteps = new Array(doomsYear - currentYear)
    .fill(0)
    .map((step, i) => currentYear + 1 + i);

  return (
    <Container>
      <Description>
        Drar vi av lika mycket de kommande åren når vi ett slutdatum:
        <span>
          {`${doomsDate.getDate()} ${
            MONTHS[doomsDate.getMonth()]
          }, ${doomsYear}`}
        </span>
      </Description>
      <VictoryStack
        height={10}
        padding={{ top: 5, right: 0, bottom: 5, left: 0 }}
      >
        {yearSteps.map((year, i) => (
          <VictoryBar
            key={i}
            data={[currentEmissions]}
            horizontal
            height={10}
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
        ))}
      </VictoryStack>
      <YearSteps>
        {yearSteps.map((year, i) => (
          <Year key={i}>{year}</Year>
        ))}
      </YearSteps>
    </Container>
  );
}
