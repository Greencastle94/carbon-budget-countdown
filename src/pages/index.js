import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import getRandomInt from "../utils/getRandomInt";

const Background = styled.div`
  width: 100%;
  height: 100vh;
`;

const EmptySpace = styled.div`
  height: 60vh;
`;

const StartContent = styled.div`
  background-color: rgba(0, 0, 0, 0.54);
  padding: 1rem 16px 0 16px;
  height: calc(40vh - 1rem);

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

const ReadMore = styled.div`
  width: 100vw;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 5px;

  p {
    text-align: center;
  }

  img {
    color: white;
    display: block;
    width: 10%;
    margin: auto;
  }
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
      backgroundPosition: "-445px",
    },
  ];

  return backgrounds[getRandomInt(backgrounds.length)];
}

// GLOBAL CONSTANTS
const CURRENT_BUDGET = 370; // (MtCO2) post-2019
const CURRENT_EMISSIONS = 49.8; // (MtCO2) preliminary numbers for 2019
const START_DATE = new Date("Jan 1, 2020 00:00:00");

export default function Home() {
  const [counter, setCounter] = React.useState(0);
  const [timeLeft, setTimeLeft] = React.useState({});
  const [background, setBackground] = React.useState();

  // Initial calculations
  React.useEffect(() => {
    setBackground(getRandomBackground());

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

          <ReadMore>
            <p>Läs mer</p>
            <img src="/down-arrow.svg" alt="" />
          </ReadMore>
        </StartContent>
      </Background>
    </Layout>
  );
}
