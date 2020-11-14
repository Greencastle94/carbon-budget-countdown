import React from "react";
import styled from "@emotion/styled";

const CountdownWrapper = styled.div`
  position: relative; // Move countdown in front of background circle

  height: 75%;
  width: 250px;
  margin: 0 auto auto;
  text-align: center;

  // Center vertically
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const YearDay = styled.p`
  color: black;
  font-size: 20px;
  font-family: var(--font-heading);
  margin: 0;
  margin-bottom: 5px;
`;

const HourMinSec = styled.p`
  color: black;
  font-size: 46px;
  font-family: var(--font-heading);
  letter-spacing: 3px;
  margin: 0;
`;

const HourMinSec_Labels = styled.p`
  color: black;
  font-size: 14px;
  font-family: var(--font-heading);
  word-spacing: 1.5rem;
  margin: 0;
`;

// GLOBAL CONSTANTS
const CURRENT_BUDGET = 370; // (MtCO2) post-2019
const CURRENT_EMISSIONS = 49.8; // (MtCO2) preliminary numbers for 2019
const START_DATE = new Date("Jan 1, 2020 00:00:00");

export default function Countdown() {
  const [counter, setCounter] = React.useState(0);
  const [timeLeft, setTimeLeft] = React.useState({});

  // Initial calculations
  React.useEffect(() => {
    const millisecondsLeft = (CURRENT_BUDGET / CURRENT_EMISSIONS) * 31556952000;
    const then = START_DATE.getTime() + millisecondsLeft;
    const now = new Date().getTime();
    setCounter(then - now);
  }, []);

  // Updating counter
  React.useEffect(() => {
    setTimeLeft({
      years: Math.floor(counter / (1000 * 60 * 60 * 24 * 365)),
      days: Math.floor(
        (counter % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)
      ),
      hours: Math.floor((counter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((counter % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((counter % (1000 * 60)) / 1000),
    });

    counter > 0 && setTimeout(() => setCounter(counter - 1000), 1000);
  }, [counter]);

  return (
    <CountdownWrapper>
      <YearDay>{`${timeLeft.years} ÅR, ${timeLeft.days} ${
        timeLeft.days === 1 ? "DAG" : "DAGAR"
      },`}</YearDay>

      <HourMinSec>
        {`${timeLeft.hours < 10 ? 0 : ""}${timeLeft.hours}:${
          timeLeft.minutes < 10 ? 0 : ""
        }${timeLeft.minutes}:${timeLeft.seconds < 10 ? 0 : ""}${
          timeLeft.seconds
        }`}
      </HourMinSec>

      <HourMinSec_Labels>
        {`${timeLeft.hours === 1 ? "timme" : "timmar"} ${
          timeLeft.minutes === 1 ? "minut" : "minuter"
        } ${timeLeft.seconds === 1 ? "sekund" : "sekunder"}`}
      </HourMinSec_Labels>
    </CountdownWrapper>
  );
}
