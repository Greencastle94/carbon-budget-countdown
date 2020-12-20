import React from "react";
import styled from "@emotion/styled";
import Circle from "../Circle";
import Countdown from "./Countdown";
import CountdownText from "./CountdownText";
import ScrollDownArrow from "./ScrollDownArrow";
import { CURRENT_BUDGET, CURRENT_EMISSIONS, START_DATE } from "../../constants";

export default function StartSection() {
  const StyledStartSection = styled.section`
    position: relative;
    overflow: hidden;
    height: calc(100vh - 44px);
    display: flex;
    flex-direction: column;
  `;

  return (
    <StyledStartSection>
      <Circle
        color="var(--primary-color)"
        size={`${50}px`}
        left={`${20}%`}
        top={`${10}%`}
      />
      <Circle
        color="var(--primary-color)"
        size={`${350}px`}
        left={`${100}%`}
        top={`${10}%`}
      />
      <Countdown
        currentBudget={CURRENT_BUDGET}
        currentEmissions={CURRENT_EMISSIONS}
        startDate={START_DATE}
      />
      <div>
        <CountdownText>
          Tid kvar tills Sveriges koldioxidbudget är slut.
        </CountdownText>
        <ScrollDownArrow />
      </div>
    </StyledStartSection>
  );
}
