import React from "react";
import styled from "@emotion/styled";
import Circle from "../Circle";
import Countdown from "./Countdown";
import CountdownText from "./CountdownText";
import ScrollDownArrow from "./ScrollDownArrow";
import { getCurrentBudget } from "../../utils/utils";
import { CURRENT_EMISSIONS } from "../../constants";

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
        color="var(--secondary-color)"
        size={`${50}px`}
        left={`${20}%`}
        top={`${10}%`}
      />
      <Circle
        color="var(--secondary-color)"
        size={`${350}px`}
        left={`${93}%`}
        top={`${10}%`}
      />
      <Countdown
        currentBudget={getCurrentBudget()}
        currentEmissions={CURRENT_EMISSIONS}
        startDate={new Date(`Jan 1, ${new Date().getFullYear()} 00:00:00`)}
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
