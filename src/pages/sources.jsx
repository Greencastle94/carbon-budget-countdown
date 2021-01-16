import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import BackButton from "../components/BackButton";
import ContentWrapper from "../components/ContentWrapper";

const FAQ = styled.div`
  margin-bottom: 32px;

  p,
  h3 {
    max-width: 700px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export default function SourcesPage() {
  return (
    <Layout>
      <BackButton to="/" />
      <ContentWrapper>
        <h2>Källor</h2>
        <br />

        <FAQ>
          <h3>Sveriges årliga utsläpp</h3>
          <p>
            Naturvårdsverket är myndigheten som redovisar Sveriges årliga
            utsläpp.
            <br />
            <a href="https://www.naturvardsverket.se/Sa-mar-miljon/Klimat-och-luft/Klimat/Tre-satt-att-berakna-klimatpaverkande-utslapp/Kvartals--och-preliminara-arsvisa-vaxthusgasutslapp/">
              Läs mer
            </a>
          </p>
        </FAQ>

        <FAQ>
          <h3>Sveriges koldioxidbudget</h3>
          <p>
            I en vetenskaplig artikel skrev man om hur Storbritannien och
            Sverige ligger till med sitt åtagande till Parisavtalet genom att
            titta på hittills beslutade policys och mål. Koldioxidbudgeten för
            Sverige som räknades fram i artikeln användes för att skapa
            Klimatklockan.
            <br />
            <a href="https://www.tandfonline.com/doi/full/10.1080/14693062.2020.1728209">
              Länk till artikeln
            </a>
          </p>
        </FAQ>

        <FAQ>
          <h3>Klimateffekterna i Sverige</h3>
          <p>
            Sveriges Metrologiska och Hydrologiska Institut (SMHI)
            tillhandahåller öppen data om bland annat olika klimatindikatorer.
            <br />
            <a href="https://www.smhi.se/klimat/klimatet-da-och-nu/klimatindikatorer">
              Läs mer
            </a>
          </p>
        </FAQ>
      </ContentWrapper>
    </Layout>
  );
}
