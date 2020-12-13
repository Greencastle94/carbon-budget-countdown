import React from "react";
import Layout from "../components/Layout";
import BackButton from "../components/BackButton";
import ContentWrapper from "../components/ContentWrapper";

export default function SourcesPage() {
  return (
    <Layout>
      <BackButton to="/" />
      <ContentWrapper>
        <h2>Sveriges årliga utsläpp</h2>
        <p>
          Naturvårdsverket är myndigheten som redovisar Sveriges årliga utsläpp.
          <br />
          <a href="https://www.naturvardsverket.se/Sa-mar-miljon/Klimat-och-luft/Klimat/Tre-satt-att-berakna-klimatpaverkande-utslapp/Kvartals--och-preliminara-arsvisa-vaxthusgasutslapp/">
            Läs mer
          </a>
        </p>

        <h2>Sveriges koldioxidbudget</h2>
        <p>
          I en vetenskaplig artikel skrev man om hur Storbritannien och Sverige
          ligger till med sitt åtagande till Parisavtalet genom att titta på
          hittills beslutade policys. Koldioxidbudgeten för Sverige som räknades
          fram i artikeln användes för att skapa Klimatklockan.
          <br />
          <a href="https://www.tandfonline.com/doi/full/10.1080/14693062.2020.1728209">
            Länk till artikeln
          </a>
        </p>

        <h2>Klimateffekterna i Sverige</h2>
        <p>
          Sveriges Metrologiska och Hydrologiska Institut (SMHI) tillhandahåller
          öppen data om bland annat olika klimatindikatorer.
          <br />
          <a href="https://www.smhi.se/klimat/klimatet-da-och-nu/klimatindikatorer">
            Läs mer
          </a>
        </p>
      </ContentWrapper>
    </Layout>
  );
}
