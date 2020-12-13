import React from "react";
import Layout from "../components/Layout";
import BackButton from "../components/BackButton";
import ContentWrapper from "../components/ContentWrapper";

export default function AboutPage() {
  return (
    <Layout>
      <BackButton to="/" />
      <ContentWrapper>
        <h2>Om Klimatklockan</h2>
        <p>
          Många i Sverige känner till att vi har pågående mänskligt drivna
          klimatförändringar och att det är allvarligt, men väldigt få känner
          till hur Sverige faktiskt ligger till i förhållande till Parisavtalet.
          Genom att dela upp koldioxidbudgeten för åtagandet till Parisavtalet
          kan man få ut Sveriges specifika andel av åtagandet som vi behöver
          klara av. Den idén med inspiration av DN’s klimatsida{" "}
          <a
            style={{ fontWeight: "normal" }}
            href="https://www.dn.se/klimatet-just-nu/"
          >
            “Klimatet just nu”
          </a>{" "}
          var det som sparkade igång arbetet med Klimatklockan.
        </p>
        <p>
          DN’s “klimatklocka” är baserad på hela världens koldioxidbudget och
          jag tyckte konceptet med klockan visade väldigt bra allvaret i hur
          pass kort tid vi faktiskt har på oss att lösa klimatkrisen. Dock kände
          jag att siffrorna behövde komma närmare en om människor faktiskt ska
          kunna ta till sig det. En klimatklocka för Sverige är lättare att
          relatera och förhålla sig till. Det går inte att skjuta ansvaret till
          något annat land då det är Sveriges andel av koldioxidbudgeten för
          åtagande till Parisavtalet. Att hålla sig under 1.5 graders global
          uppvärmning.
        </p>
        <p>
          Klimatklockan handlar om klimatet och det genomsyrade hela arbetet med
          hemsidan. Den ligger på en server som drivs av grön el och mängden
          data som behöver skickas över nätet har minimerats så mycket det går.
          <br />
          <a
            style={{ marginBottom: "1rem" }}
            href="https://www.websitecarbon.com/"
          >
            Testa hemsidans klimatavtryck här!
          </a>
        </p>

        <h2>Vad är en koldioxidbudget?</h2>
        <p style={{ margin: 0 }}>
          Mängden koldioxid i atmosfären korrelerar med en viss genomsnittlig
          global temperatur. På så sätt kan man räkna fram ett tak för hur
          mycket koldioxid vi kan släppa ut innan vi når en viss global
          uppvärmning.
          <br />
          <a href="https://en.wikipedia.org/wiki/Emissions_budget">Läs mer</a>
        </p>
      </ContentWrapper>
    </Layout>
  );
}
