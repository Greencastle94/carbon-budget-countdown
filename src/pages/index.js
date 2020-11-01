import React from "react";
import styled from "@emotion/styled";
// Components
import Layout from "../components/Layout";
import { Countdown } from "../components/Countdown";
import ContentWrapper from "../components/ContentWrapper";
//Images
import arrowImg from "../../static/down-arrow.svg";

export default function Home() {
  const StartContent = styled.div`
    height: calc(100vh - 40px);
    margin: 20px 0;
  `;

  const Header = styled.div`
    display: flex;

    h1,
    p {
      font-size: 16px;
      font-weight: normal;
      font-family: var(--font-heading);
      color: var(--font-color-header);
      margin: auto;
    }
  `;

  const CountdownText = styled.p`
    font-size: 20px;
    font-family: var(--font-heading);
    text-align: center;
    margin-bottom: 30px;
  `;

  return (
    <Layout>
      <StartContent>
        <Header>
          <h1>Klimatklockan</h1>
          <p>Sverige</p>
        </Header>
        <Countdown />
        <ContentWrapper>
          <CountdownText>
            Tid kvar tills Sveriges koldioxidbudget är slut.
          </CountdownText>
          <img
            style={{ width: "20px", display: "block", margin: "auto" }}
            src={arrowImg}
            alt=""
          />
        </ContentWrapper>
      </StartContent>
    </Layout>
  );
}
