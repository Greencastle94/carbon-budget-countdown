import React from "react";
import styled from "@emotion/styled";
import getRandomInt from "../utils/getRandomInt";

const desktop = "768px";

const Background = styled.div`
  width: 100%;
  height: 100vh;
`;

const sharedDesktopStyling = {
  backgroundPosition: "0 0",
  backgroundSize: "cover",
};

const IndustryBackground = styled(Background)`
  background-image: url(./industry.jpg);
  background-position: -965px -221px;

  @media (min-width: ${desktop}) {
    ${sharedDesktopStyling}
    background-position: 0 -160px;
  }
`;
const AviationBackground = styled(Background)`
  background-image: url(./aviation.jpg);
  background-position: -1281px -503px;

  @media (min-width: ${desktop}) {
    ${sharedDesktopStyling}
  }
`;
const CarsBackground = styled(Background)`
  background-size: cover;
  background-image: url(./cars.jpg);
  background-position: -445px;

  @media (min-width: ${desktop}) {
    ${sharedDesktopStyling}
  }
`;

export default function BackgroundImage({ children }) {
  const [background, setBackground] = React.useState();

  React.useEffect(() => setBackground(getRandomInt(3)), []);

  if (background === 1) {
    return <IndustryBackground>{children}</IndustryBackground>;
  } else if (background === 2) {
    return <AviationBackground>{children}</AviationBackground>;
  } else {
    return <CarsBackground>{children}</CarsBackground>;
  }
}
