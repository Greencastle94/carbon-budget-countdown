import React from "react";
import Layout from "../components/Layout";
import BackButton from "../components/BackButton";
import ContentWrapper from "../components/ContentWrapper";

export default function CookiePolicy() {
  return (
    <Layout>
      <BackButton to="/" />
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
