import React from "react";
// COMPONENTS
import Card from "../components/Card";
import Button from "../components/Button";
import Circle from "../components/Circle";
import Layout from "../components/Layout";
import Timeline from "../components/Charts/Timeline";
import CardContainer from "../components/CardContainer";
import ContentWrapper from "../components/ContentWrapper";
import BudgetCharts from "../components/Charts/BudgetCharts";
import EmissionReductions from "../components/EmissionReductions";
import StartSection from "../components/StartSection/StartSection";
// DATA
import seaLevelRiseData from "../../data/havsnivå.json";
import averageYearTempData from "../../data/temperatur.json";

export default function Home() {
  return (
    <Layout>
      <StartSection />

      <section>
        <ContentWrapper>
          <EmissionReductions />
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

          <BudgetCharts />
          <Timeline />
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
