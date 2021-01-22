import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import BackButton from "../components/BackButton";
import ExternalLink from "../components/ExternalLink";
import ContentWrapper from "../components/ContentWrapper";

const Container = styled.div`
  margin-bottom: 32px;

  p,
  a,
  h3 {
    max-width: 700px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export default function AboutPage() {
  return (
    <Layout>
      <PageTitle>Om Klimatklockan</PageTitle>

      <ContentWrapper>
        <Container>
          <p>
            Många i Sverige känner till att vi har pågående mänskligt drivna
            klimatförändringar och att det är allvarligt, men väldigt få känner
            till hur Sverige faktiskt ligger till i förhållande till
            Parisavtalet. Genom att dela upp koldioxidbudgeten för åtagandet
            till Parisavtalet kan man få ut Sveriges specifika andel av
            åtagandet som vi behöver klara av. Den idén med inspiration av DN’s
            klimatsida{" "}
            <a
              style={{ fontWeight: "normal" }}
              href="https://www.dn.se/klimatet-just-nu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              “Klimatet just nu”
            </a>{" "}
            var det som sparkade igång arbetet med Klimatklockan.
          </p>
          <p>
            DN’s “klimatklocka” är baserad på hela världens koldioxidbudget och
            jag tyckte konceptet med klockan visade väldigt bra allvaret i hur
            pass kort tid vi faktiskt har på oss att lösa klimatkrisen. Dock
            kände jag att siffrorna behövde komma närmare en om människor
            faktiskt ska kunna ta till sig det. En klimatklocka för Sverige är
            lättare att relatera och förhålla sig till. Det går inte att skjuta
            ansvaret till något annat land då det är Sveriges andel av
            koldioxidbudgeten för åtagande till Parisavtalet. Att hålla världen
            under 1.5 graders global uppvärmning.
          </p>
          <p>
            Klimatklockan handlar om klimatet och det genomsyrade hela arbetet
            med hemsidan. Den ligger på en server med lågt koldioxidavtryck och
            mängden data som behöver skickas över nätet har minimerats så mycket
            det går.
          </p>
          <ExternalLink
            style={{ marginBottom: "1rem" }}
            href="https://www.websitecarbon.com/"
          >
            Testa hemsidans klimatavtryck här!
          </ExternalLink>
          <img
            style={{ display: "block", margin: "20px auto 0" }}
            src="https://api.thegreenwebfoundation.org/greencheckimage/klimatklockan.se"
            alt="This website is hosted Green - checked by thegreenwebfoundation.org"
          />
        </Container>

        <Container>
          <h3>Är det som står på hemsidan korrekt?</h3>
          <p>
            För att se till att Klimatklockan förmedlar fakta korrekt så har
            forskare på Uppsala universitet fått säkerställa detta. Vi vill även
            vara så transparenta som möjligt och hänvisar därför till alla
            källor som används på hemsidan (kolla länk längst ner).
          </p>
        </Container>

        <Container>
          <h3>Vad är en koldioxidbudget?</h3>
          <p>
            Mängden koldioxid i atmosfären korrelerar med en viss genomsnittlig
            global temperatur. På så sätt kan man räkna fram ett tak för hur
            mycket koldioxid vi kan släppa ut innan vi når en viss global
            uppvärmning.
          </p>
          <ExternalLink href="https://en.wikipedia.org/wiki/Emissions_budget">
            Läs mer
          </ExternalLink>
        </Container>

        <BackButton to="/" />
      </ContentWrapper>
    </Layout>
  );
}
