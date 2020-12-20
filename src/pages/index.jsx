import React from "react";
import styled from "@emotion/styled";
// COMPONENTS
import Card from "../components/Card";
import Button from "../components/Button";
import Circle from "../components/Circle";
import Layout from "../components/Layout";
import CardContainer from "../components/CardContainer";
import Timeline from "../components/Charts/Timeline";
import ContentWrapper from "../components/ContentWrapper";
import Countdown from "../components/StartSection/Countdown";
import BudgetCharts from "../components/Charts/BudgetCharts";
import EmissionReductions from "../components/EmissionReductions";
import CountdownText from "../components/StartSection/CountdownText";
import ScrollDownArrow from "../components/StartSection/ScrollDownArrow";
// DATA
import seaLevelRiseData from "../../data/havsnivå.json";
import averageYearTempData from "../../data/temperatur.json";

// GLOBAL CONSTANTS
const CURRENT_BUDGET = 370; // (MtCO2) post-2019
const YEARLY_EMISSIONS = { "2018": 52.2, "2019": 50.9 }; // MtCO2
const CURRENT_YEAR = 2019;
const CURRENT_EMISSIONS = YEARLY_EMISSIONS[CURRENT_YEAR];
const START_DATE = new Date("Jan 1, 2020 00:00:00");

export default function Home() {
  const StartSection = styled.section`
    position: relative;
    overflow: hidden;
    height: calc(100vh - 44px);
    display: flex;
    flex-direction: column;
  `;

  return (
    <Layout>
      <StartSection>
        <Circle
          color="var(--primary-color)"
          size={`${50}px`}
          left={`${20}%`}
          top={`${10}%`}
        />
        <Circle
          color="var(--primary-color)"
          size={`${350}px`}
          left={`${100}%`}
          top={`${10}%`}
        />
        <Countdown
          currentBudget={CURRENT_BUDGET}
          currentEmissions={CURRENT_EMISSIONS}
          startDate={START_DATE}
        />
        <CountdownText>
          Tid kvar tills Sveriges koldioxidbudget är slut.
        </CountdownText>
        <ScrollDownArrow />
      </StartSection>

      <section>
        <ContentWrapper>
          <EmissionReductions
            currentYear={CURRENT_YEAR}
            yearlyEmissions={YEARLY_EMISSIONS}
          />
        </ContentWrapper>

        <ContentWrapper dark center>
          <h2>Vad händer när tiden är slut?</h2>
          <p style={{ margin: "0" }}>
            Inget kommer plötsligt att hända om tiden tar slut men Sverige har
            då misslyckats att fullfölja sitt åtagande till Paris-avtalet. Vi
            börjar då att gnaga på andra länders koldioxidbudgetar.
          </p>
        </ContentWrapper>

        <ContentWrapper center>
          <h2>Hur räknar vi ut tiden?</h2>
          <p style={{ margin: "0" }}>
            Vi har utgått från totalen av hur mycket Sverige har kvar att släppa
            ut innan vi misslyckats med vårt åtagande till Paris-avtalet. Sedan
            dragit av motsvarande vad Sverige släppte ut senaste året med
            tillgänglig data.
          </p>

          <BudgetCharts
            currentEmissions={CURRENT_EMISSIONS}
            currentYear={CURRENT_YEAR}
            currentBudget={CURRENT_BUDGET}
          />
          <Timeline
            startDate={START_DATE}
            currentEmissions={CURRENT_EMISSIONS}
            currentYear={new Date().getFullYear()}
            currentBudget={CURRENT_BUDGET}
          />
        </ContentWrapper>

        <ContentWrapper dark center>
          <h2>Vi kan stoppa klockan</h2>
          <p style={{ margin: "0" }}>
            Genom att minska våra utsläpp kan vi förlänga tiden vi har på oss,
            och tillslut, stoppa klockan innan tiden tagit slut.
          </p>
        </ContentWrapper>

        <ContentWrapper>
          <Circle
            color="var(--primary-color)"
            size={`${450}px`}
            left={`${100}%`}
            top={`${32}%`}
          />
          <h2>Klimateffekterna i Sverige</h2>
          <p>
            Konsekvenserna är redan märkbara, och för att få en helhetsbild över
            vart vi är påväg kan man titta på trender över flera indikatorer.
          </p>
          <CardContainer>
            <Card data={averageYearTempData} unit="°C">
              Medeltemperatur
            </Card>
            <Card data={seaLevelRiseData} unit="cm">
              Havsnivå
            </Card>
            <Card unit="dagar">Antal snödagar</Card>
          </CardContainer>
        </ContentWrapper>

        <ContentWrapper>
          <h2>Är det inte kört redan?</h2>
          <p style={{ margin: "0" }}>
            Visst kan det kännas så ibland… Alternativet att inte göra allt för
            att lösa det skulle däremot vara så förördande att det inte kan vara
            ett alternativt. Du kan påverka mer än vad du tror. Från att minska
            dina egna utsläpp till att påverka andra och förändra normer.
          </p>
        </ContentWrapper>

        <ContentWrapper center style={{ marginBottom: "30px" }}>
          <h2>Håll konversationen vid liv!</h2>
          <p>
            Vi kan bara göra skillnad om vi förstår utmaningen, och den korta
            begränsade tiden vi har på oss.
          </p>
          <Button>Dela sidan</Button>
        </ContentWrapper>
      </section>
    </Layout>
  );
}
