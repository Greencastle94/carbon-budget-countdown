import React from "react";
import styled from "@emotion/styled";
// Components
import Button from "../components/Button";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Circle from "../components/Circle";
import Countdown from "../components/Countdown";
import CountdownText from "../components/CountdownText";
import ContentWrapper from "../components/ContentWrapper";

export default function Home() {
  const StartContent = styled.div`
    position: relative;
    overflow: hidden;
    height: calc(100vh - 44px);
    display: flex;
    flex-direction: column;
  `;

  return (
    <Layout>
      <StartContent>
        <Circle color="var(--primary-color)" size="50px" left="20%" top="10%" />
        <Circle
          color="var(--primary-color)"
          size="350px"
          left="100%"
          top="10%"
        />
        <Countdown />
        <CountdownText>
          Tid kvar tills Sveriges koldioxidbudget är slut.
        </CountdownText>
      </StartContent>

      <ContentWrapper>
        <h2>Vad händer när tiden är slut?</h2>
        <p>
          Enligt Paris-avtalet som Sverige har förbundit sig till att följa
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enligt
          Paris-avtalet som Sverige har förbundit sig till att följa lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </ContentWrapper>

      <ContentWrapper center>
        <h2>Hur räknar vi ut tiden?</h2>
        <p>
          Vi har utgått från totalen av hur mycket vi har kvar enligt Sveriges
          åtagande till Paris-avtalet. Och dragit av motsvarande vad Sverige
          spenderat förra året.
        </p>
      </ContentWrapper>

      <ContentWrapper dark center>
        <h2>Vi kan stoppa klockan</h2>
        <p>
          Genom att minska våra utsläpp kan vi förlänga tiden vi har på oss, och
          tillslut, stoppa klockan. Hur kan vi göra detta? Jo genom lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </ContentWrapper>

      <ContentWrapper>
        <h2>Klimateffekterna i Sverige</h2>
        <p>
          Konsekvenserna är redan märkbara, och för att få en helhetsbild över
          vart vi är påväg kan man titta på trender över flera faktorer.
        </p>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </ContentWrapper>

      <ContentWrapper>
        <h2>Är det inte kört redan?</h2>
        <p>
          Visst kan det kännas så ibland… Alternativet att inte göra allt för
          att lösa det skulle däremot vara så förördande att det inte kan vara
          ett alternativt. Du kan påverka mer än vad du tror. Från att minska
          dina egna utsläpp till att påverka och förändra normer.
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
    </Layout>
  );
}
