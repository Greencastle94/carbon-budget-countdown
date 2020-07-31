import React from "react";
import styled from "@emotion/styled";
// Components
import Layout from "../components/Layout";
import ContentWrapper from "../components/ContentWrapper";
// Functions
import getRandomInt from "../utils/getRandomInt";
// Images
import downArrowSVG from "../../static/down-arrow.svg";

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
      backgroundImage: "url(./industry.jpg)",
      backgroundPosition: "-965px -221px",
    },
    {
      backgroundImage: "url(./aviation.jpg)",
      backgroundPosition: "-300px 0",
    },
    {
      backgroundSize: "cover",
      backgroundImage: "url(./cars.jpg)",
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
            <img src={downArrowSVG} alt="" />
          </ReadMore>
        </StartContent>
      </Background>

      <ContentWrapper>
        <h2>Var kommer siffrorna ifrån?</h2>
        <p>
          Nedräkningen är baserad på Sveriges andel av den globala
          koldioxidbudgeten som vi kan släppa ut innan vi uppnår 1,5 graders
          uppvärmning. Tillsammans med siffror på Sveriges årliga utsläpp kan
          man räkna fram hur mycket tid vi har kvar innan vi uppnått 1,5 graders
          uppvärmning. Dock så räknar man inte in internationellt flyg eller
          sjöfart. Så nedräkningsklockan visar en överskattad tid vi har kvar.
        </p>
        <p>Källor:</p>
        <ul>
          <li>
            <a href="https://www.naturvardsverket.se/Sa-mar-miljon/Klimat-och-luft/Klimat/Tre-satt-att-berakna-klimatpaverkande-utslapp/Kvartals--och-preliminara-arsvisa-vaxthusgasutslapp/">
              <i>Kvartals- och preliminära årsvisa växthusgasutsläpp</i>
            </a>
          </li>
          <li>
            <a href="https://www.tandfonline.com/doi/full/10.1080/14693062.2020.1728209">
              <i>
                A factor of two: how the mitigation plans of ‘climate
                progressive’ nations fall far short of Paris-compliant pathways
              </i>
            </a>
          </li>
        </ul>
      </ContentWrapper>
      <ContentWrapper>
        <h2>Vad är en koldioxidbudget?</h2>
        <p>
          Mängden koldioxid i atmosfären korrelerar med en viss genomsnittlig
          global temperatur. På så sätt kan man räkna fram ett tak för hur
          mycket koldioxid vi kan släppa ut innan vi når en viss global
          uppvärmning.
        </p>
        <p>
          <a href="https://en.wikipedia.org/wiki/Emissions_budget">
            Läs mer här
          </a>
        </p>
      </ContentWrapper>
      <ContentWrapper>
        <h2>Det är ont om tid. Är det inte kört?</h2>
        <p>
          Det är sant att det är ont om tid men det är inte omöjligt att
          fortfarande klara målet, men då krävs mer drastiska och ambitiösa
          handlingar av oss alla. Som politiker, företag eller individ. Ny
          teknik behövs men på den tidshorisont vi tittar på så kan vi inte
          förlita oss på att tekniken kommer rädda oss. Andra lösningar som kan
          minska utsläpp nu behövs.
        </p>
      </ContentWrapper>
    </Layout>
  );
}
