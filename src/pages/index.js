import React from "react";
import styled from "@emotion/styled";
// Components
import Layout from "../components/Layout";
import ContentWrapper from "../components/ContentWrapper";
import IndustryBackgroundSection from "../components/BackgroundSection/IndustryBackgroundSection";
import AviationBackgroundSection from "../components/BackgroundSection/AviationBackgroundSection";
import CarsBackgroundSection from "../components/BackgroundSection/CarsBackgroundSection";
// Images
import downArrowSVG from "../../static/down-arrow.svg";
import linkSVG from "../../static/link.svg";
// Functions
import getRandomInt from "../utils/getRandomInt";

const EmptySpace = styled.div`
  height: 60vh;
`;

const StartContent = styled.div`
  background-color: rgba(0, 0, 0, 0.54);
  padding: 1rem 16px 0 16px;
  height: calc(40vh - 1rem);

  @media (min-width: 768px) {
    padding: 2.5rem 0 0 16px;
    height: calc(40vh - 2.5rem);

    p {
      font-size: 1.5rem;
    }
  }

  p {
    margin-bottom: 0.5rem;

    @media (min-width: 768px) {
      text-align: center;
    }
  }
`;

const Countdown = styled.p`
  color: yellow;
  font-weight: bold;
  font-family: Verdana;
  font-size: 1.5rem;

  @media (min-width: 768px) {
    margin: auto;
    font-size: 2rem;
  }
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

    @media (min-width: 768px) {
      width: 42px;
    }
  }
`;

const BigLink = styled.a`
  font-size: 1.5rem;
  font-weight: bold;

  img {
    height: 20px;
  }
`;

// GLOBAL CONSTANTS
const CURRENT_BUDGET = 370; // (MtCO2) post-2019
const CURRENT_EMISSIONS = 49.8; // (MtCO2) preliminary numbers for 2019
const START_DATE = new Date("Jan 1, 2020 00:00:00");

export default function Home() {
  const [counter, setCounter] = React.useState(0);
  const [timeLeft, setTimeLeft] = React.useState({});
  const [background, setBackground] = React.useState();

  React.useEffect(() => setBackground(getRandomInt(3)), []);

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

  const content = (
    <>
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
    </>
  );

  return (
    <Layout>
      {background === 1 ? (
        <IndustryBackgroundSection>{content}</IndustryBackgroundSection>
      ) : background === 2 ? (
        <AviationBackgroundSection>{content}</AviationBackgroundSection>
      ) : (
        <CarsBackgroundSection>{content}</CarsBackgroundSection>
      )}

      <section>
        <ContentWrapper>
          <h2>Var kommer siffrorna ifrån?</h2>
          <p>
            Nedräkningen är baserad på Sveriges andel av den globala
            koldioxidbudgeten som vi kan släppa ut innan vi uppnår 1,5 graders
            uppvärmning. Tillsammans med siffror på Sveriges årliga utsläpp kan
            man räkna fram hur mycket tid vi har kvar innan vi uppnått 1,5
            graders uppvärmning. Dock så räknar man inte in internationellt flyg
            eller sjöfart. Så nedräkningsklockan visar en överskattad tid vi har
            kvar.
          </p>
          <p>Källor:</p>
          <ul>
            <li>
              <a href="https://www.naturvardsverket.se/Sa-mar-miljon/Klimat-och-luft/Klimat/Tre-satt-att-berakna-klimatpaverkande-utslapp/Kvartals--och-preliminara-arsvisa-vaxthusgasutslapp/">
                <i>Kvartals- och preliminära årsvisa växthusgasutsläpp</i>{" "}
                <img src={linkSVG} alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.tandfonline.com/doi/full/10.1080/14693062.2020.1728209">
                <i>
                  A factor of two: how the mitigation plans of ‘climate
                  progressive’ nations fall far short of Paris-compliant
                  pathways
                </i>{" "}
                <img src={linkSVG} alt="" />
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
              Läs mer här <img src={linkSVG} alt="" />
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
            förlita oss på att tekniken kommer rädda oss. Andra lösningar som
            kan minska utsläpp nu behövs.
          </p>
        </ContentWrapper>

        <ContentWrapper style={{ textAlign: "center" }}>
          <BigLink href="https://www.dn.se/klimatet-just-nu/">
            Klockan för världen just nu <img src={linkSVG} alt="" />
          </BigLink>
        </ContentWrapper>
      </section>
    </Layout>
  );
}
