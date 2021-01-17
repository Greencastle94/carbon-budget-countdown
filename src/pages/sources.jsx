import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import BackButton from "../components/BackButton";
import ExternalLink from "../components/ExternalLink";
import ContentWrapper from "../components/ContentWrapper";

const FAQ = styled.div`
  margin-bottom: 32px;
  p,
  a,
  h3 {
    max-width: 700px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export default function SourcesPage() {
  return (
    <Layout>
      <PageTitle>Källor</PageTitle>

      <ContentWrapper>
        <FAQ>
          <h3>Sveriges årliga utsläpp</h3>
          <p>
            Naturvårdsverket är myndigheten som redovisar Sveriges årliga
            utsläpp.
          </p>
          <ExternalLink href="https://www.naturvardsverket.se/Sa-mar-miljon/Klimat-och-luft/Klimat/Tre-satt-att-berakna-klimatpaverkande-utslapp/Kvartals--och-preliminara-arsvisa-vaxthusgasutslapp/">
            Läs mer
          </ExternalLink>
        </FAQ>

        <FAQ>
          <h3>Sveriges koldioxidbudget</h3>
          <p>
            I en vetenskaplig artikel skrev man om hur Storbritannien och
            Sverige ligger till med sitt åtagande till Parisavtalet genom att
            titta på hittills beslutade policys och mål. Koldioxidbudgeten för
            Sverige som räknades fram i artikeln användes för att skapa
            Klimatklockan.
          </p>
          <ExternalLink href="https://www.tandfonline.com/doi/full/10.1080/14693062.2020.1728209">
            Länk till artikeln
          </ExternalLink>
        </FAQ>

        <FAQ>
          <h3>Klimateffekterna i Sverige</h3>
          <p>
            Sveriges Metrologiska och Hydrologiska Institut (SMHI)
            tillhandahåller öppen data om bland annat olika klimatindikatorer.
          </p>
          <ExternalLink href="https://www.smhi.se/klimat/klimatet-da-och-nu/klimatindikatorer">
            Läs mer
          </ExternalLink>
        </FAQ>

        <BackButton to="/" />
      </ContentWrapper>
    </Layout>
  );
}
