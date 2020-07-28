import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import getRandomInt from "../utils/getRandomInt";
import ContentWrapper from "../components/ContentWrapper";

const Background = styled.div`
  width: 100%;
  height: 100vh;
`;

const EmptySpace = styled.div`
  height: 70vh;
`;

const StartContent = styled.div`
  background-color: rgba(0, 0, 0, 0.54);
  padding: 1rem 16px 0 16px;
  height: calc(30vh - 1rem);

  p {
    margin-bottom: 0.5rem;
  }
`;

const Countdown = styled.p`
  color: yellow;
  font-weight: bold;
  font-family: Verdana;
  font-size: 1.5rem;
  display: inline-block;
`;

function getRandomBackground() {
  const backgrounds = [
    {
      backgroundImage: "url('/industry.jpg')",
      backgroundPosition: "-965px -221px",
    },
    {
      backgroundImage: "url('/aviation.jpg')",
      backgroundPosition: "-300px 0",
    },
    {
      backgroundSize: "cover",
      backgroundImage: "url('/cars.jpg')",
      backgroundPosition: "-634px",
    },
  ];

  return backgrounds[getRandomInt(backgrounds.length)];
}

// Unit: MtCO2
const currentBudget = 370;
const currentEmissions = 51.8; // 2018
const startDate = new Date("Jan 1, 2020 00:00:00");

export default function Home() {
  const millisecondsLeft = (currentBudget / currentEmissions) * 31556952000; //milliseconds
  const then = startDate.getTime() + millisecondsLeft;
  const now = new Date().getTime();

  const [counter, setCounter] = React.useState(then - now);
  const [timeLeft, setTimeLeft] = React.useState({});
  const [background, setBackground] = React.useState();

  React.useEffect(() => setBackground(getRandomBackground()), []);

  React.useEffect(() => {
    const seconds = Math.floor((counter % (1000 * 60)) / 1000);
    const minutes = Math.floor((counter % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor(
      (counter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const days = Math.floor(
      (counter % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)
    );
    const years = Math.floor(counter / (1000 * 60 * 60 * 24 * 365));

    setTimeLeft({
      years: years,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    });

    counter > 0 && setTimeout(() => setCounter(counter - 1000), 1000);
  }, [counter]);

  return (
    <Layout>
      <Background style={background}>
        <EmptySpace />
        <StartContent>
          <p>
            I <b>Sverige</b> måste utsläppen sluta helt om:{" "}
          </p>
          <Countdown>{`${timeLeft.years} år, ${timeLeft.days} ${
            timeLeft.days === 1 ? "dag" : "dagar"
          }, ${timeLeft.hours} ${timeLeft.hours === 1 ? "timme" : "timmar"}, ${
            timeLeft.minutes
          } min, ${timeLeft.seconds} sek`}</Countdown>
          <p>om vi ska uppnå vår del av Parisavtalet.</p>
        </StartContent>
      </Background>
    </Layout>
  );
}
