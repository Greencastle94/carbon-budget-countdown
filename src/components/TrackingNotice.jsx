import React from "react";
import styled from "@emotion/styled";
import { getCookie, setCookie } from "../utils/cookie";
import { Link } from "gatsby";

const StyledTrackingNotice = styled.div`
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 16px;
  background: #999;

  button {
    margin-top: 16px;
    padding: 8px;
    background-color: yellow;
    border: 0;
    border-radius: 10px;
    box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.2);

    font-size: 12px;
    min-width: 220px;

    &:hover {
      background-color: #dbdb00;
    }

    @media (min-width: 768px) {
      margin: 0;
      margin-left: 16px;
      font-size: 16px;
    }
  }
`;

const TrackingNoticeContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1140px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin: auto;
    justify-content: center;
  }
`;

const CookieText = styled.p`
  flex: 0 1 70%;
  margin: 0;
`;

const TRACKING_PERMISSION_TOKEN = "allowGA";

export default function TrackingNotice() {
  const [showNotification, setShowNotification] = React.useState(
    !getCookie(TRACKING_PERMISSION_TOKEN)
  );

  if (process.env.GATSBY_ACTIVE_ENV === "stage") {
    if (typeof window === "object") {
      window[`ga-disable-${process.env.GATSBY_GA_TRACKING_ID}`] = true;
    }
  }

  if (!showNotification) {
    return null;
  } else {
    if (typeof window === "object") {
      window[`ga-disable-${process.env.GATSBY_GA_TRACKING_ID}`] = true;
    }
  }

  function allowTracking() {
    if (!process.env.GATSBY_ACTIVE_ENV === "stage") {
      if (typeof window === "object") {
        window[`ga-disable-${process.env.GATSBY_GA_TRACKING_ID}`] = false;
        window.location.reload();
      }
      setCookie(TRACKING_PERMISSION_TOKEN, 1, 365);
    }
    setShowNotification(false);
  }

  return (
    <StyledTrackingNotice>
      <TrackingNoticeContent>
        <CookieText>
          Jag använder cookies på hemsidan för att kunna förbättra upplevelsen
          för er, besökarna. Genom att klicka på den gula knappen godkänner du
          att jag använder cookies.{" "}
          <Link to="/cookie-policy">Läs mer om cookies</Link>
        </CookieText>
        <button onClick={allowTracking}>Jag förstår</button>
      </TrackingNoticeContent>
    </StyledTrackingNotice>
  );
}
