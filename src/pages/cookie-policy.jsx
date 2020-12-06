import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import ContentWrapper from "../components/ContentWrapper";
import arrowImg from "../../static/arrow-right.svg";

const BackLink = styled(Link)`
  display: flex;
  margin: 2rem 16px 0;
  max-width: 1140px;
  font-family: var(--font-heading);

  &:hover {
    text-decoration: underline;
  }

  img {
    transform: rotate(180deg);
    margin-right: 1rem;
  }

  @media (min-width: 768px) {
    margin: 30px auto;
    margin-bottom: 0;
  }
`;

export default function CookiePolicy() {
  return (
    <Layout>
      <BackLink to="/">
        <img src={arrowImg} alt="" />
        <b>Tillbaka</b>
      </BackLink>
      <ContentWrapper>
        <h2>Vad är Cookies?</h2>
        <p style={{ margin: "0" }}>
          När du surfar på hemsidan och ger ditt godkännande så samlas uppgifter
          in via så kallade cookies. Cookies är en liten textfil som skickas
          från webbservern och sparas på din webbläsare eller enhet. Information
          om din användning och vilka sidor som besöks lagras. Den information
          som inhämtas kan vara till exempel teknisk information om din enhet
          och internetuppkoppling, såsom operativsystem, webbläsarversion och
          IP-adress.
        </p>
      </ContentWrapper>
      <ContentWrapper>
        <h2>Vad används den här information till?</h2>
        <p>
          Information om hur många som besöker hemsidan, hur länge man besöker,
          vad för enhet man använder m.m. är användbart för att kunna utveckla
          och förbättra hemsidan.
        </p>
      </ContentWrapper>
    </Layout>
  );
}
