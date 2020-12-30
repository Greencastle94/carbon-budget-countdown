import React, { useState } from "react";
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
import SocialShareModal from "../components/SocialShareModal";
// DATA
import seaLevelRiseData from "../../data/havsnivå.json";
import averageYearTempData from "../../data/temperatur.json";

export default function Home() {
  const [isActiveSocialShareModal, setActiveSocialShareModal] = useState(false);

  return (
    <Layout>
      <StartSection />

      <section id="emission-reductions">
        <ContentWrapper>
          <EmissionReductions />
        </ContentWrapper>

        <ContentWrapper dark center>
          <h2>Vad händer när tiden är slut?</h2>
          <p>
            Inget kommer plötsligt att hända om tiden tar slut men Sverige har
            då misslyckats att fullfölja sitt åtagande till Paris-avtalet, att
            hålla världen under 1,5 graders global uppvärmning. Vi börjar då att
            gnaga på andra länders koldioxidbudgetar.
          </p>
        </ContentWrapper>

        <ContentWrapper>
          <h2>Hur räknar vi ut tiden?</h2>
          <p>
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
          <p>
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
          </CardContainer>
        </ContentWrapper>

        <ContentWrapper>
          <h2>Är det inte kört redan?</h2>
          <p>
            Nej, det är trots allt inte försent än men det börjar brinna i
            knutarna. Att inte göra allt för att lösa den här krisen kan inte
            vara ett alternativ. Du kan påverka mer än vad du tror. Från att
            minska dina egna utsläpp till att påverka andra, förändra normer
            eller varför inte påverka politiken eller företaget du jobbar på.
          </p>
        </ContentWrapper>

        <ContentWrapper center style={{ marginBottom: "30px" }}>
          <h2>Håll konversationen vid liv!</h2>
          <p style={{ marginBottom: "1rem" }}>
            Vi kan bara göra skillnad om vi förstår utmaningen och den korta
            begränsade tiden vi har på oss.
          </p>
          <Button
            isCTA
            onClick={() => setActiveSocialShareModal(!isActiveSocialShareModal)}
          >
            Dela sidan
          </Button>
        </ContentWrapper>
      </section>
      <SocialShareModal
        isActive={isActiveSocialShareModal}
        setActive={setActiveSocialShareModal}
      />
    </Layout>
  );
}
