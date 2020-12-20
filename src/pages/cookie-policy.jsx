import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import BackButton from "../components/BackButton";
import ContentWrapper from "../components/ContentWrapper";

const Container = styled.div`
  margin-bottom: 32px;
`;

export default function CookiePolicy() {
  return (
    <Layout>
      <BackButton to="/" />
      <ContentWrapper>
        <Container>
          <h2>Vad är Cookies?</h2>
          <p style={{ margin: "0" }}>
            När du surfar på hemsidan och ger ditt godkännande så samlas
            uppgifter in via så kallade cookies. Cookies är en liten textfil som
            skickas från webbservern och sparas på din webbläsare eller enhet.
            Information om din användning och vilka sidor som besöks på den här
            hemsidan lagras. Den information som inhämtas kan vara till exempel
            teknisk information om din enhet och internetuppkoppling, såsom
            operativsystem, webbläsarversion och IP-adress.
          </p>
        </Container>

        <Container>
          <h2>Vad används den här information till?</h2>
          <p>
            Information om hur många som besöker hemsidan, hur länge man
            besöker, vad för enhet man använder m.m. är användbart för att kunna
            utveckla och förbättra hemsidan.
          </p>
        </Container>
      </ContentWrapper>
    </Layout>
  );
}
