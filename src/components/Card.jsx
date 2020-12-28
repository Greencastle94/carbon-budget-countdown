import React from "react";
import styled from "@emotion/styled";
import { VictoryArea } from "victory";
import { average } from "../utils/utils";
import trendArrowUp from "../../static/arrow-trend-up.svg";

const StyledCard = styled.div`
  margin-bottom: 16px;
  padding: 16px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(99, 99, 99, 0.2);

  .row {
    display: flex;
  }

  .column {
    width: 40%;
    display: flex;
    flex-direction: column;

    p {
      margin-bottom: 24px;
    }

    img {
      margin-right: auto;
    }
  }
`;

export default function Card({
  children,
  data = [
    { year: 1, value: "1,0" },
    { year: 2, value: "3,0" },
    { year: 3, value: "2,0" },
    { year: 4, value: "1,0" },
    { year: 5, value: "2,0" },
  ],
  unit,
}) {
  const processedData = data.map(el => ({
    year: el.year,
    value: Number(el.value.replace(",", ".").replace("−", "-")),
  }));

  const timePeriod = 30;
  const valueChange = (
    average(processedData.slice(processedData.length - timePeriod), "value") -
    average(processedData.slice(0, timePeriod), "value")
  ).toFixed(1);

  return (
    <StyledCard>
      <h3>{`${children} (sedan ${processedData[0].year})`}</h3>
      <div className="row">
        <div className="column">
          <p>{`${valueChange > 0 ? "+" : ""} ${valueChange} ${unit}`}</p>
          <img src={trendArrowUp} alt="" />
        </div>
        <VictoryArea
          data={processedData}
          x="year"
          y="value"
          height={150}
          padding={0}
          style={{
            data: {
              fill: "var(--secondary-color)",
            },
          }}
        />
      </div>
    </StyledCard>
  );
}
