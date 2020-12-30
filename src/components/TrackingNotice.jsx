import React from "react";
import styled from "@emotion/styled";
import { getCookie, setCookie } from "../utils/cookie";
import { ENV_STAGE } from "../constants";
import { Link } from "gatsby";
import Button from "./Button";

const StyledTrackingNotice = styled.div`
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 16px;
  background: var(--primary-color);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
`;

const TrackingNoticeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1140px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin: auto;
    justify-content: center;
  }
`;

const CookieText = styled.p`
  color: var(--font-colot-heading);
  flex: 0 1 70%;
  margin: 0 0 1rem;

  @media (min-width: 768px) {
    margin-right: 32px;
  }
`;

const TRACKING_PERMISSION_TOKEN = "allowGA";

export default function TrackingNotice() {
  const [showNotification, setShowNotification] = React.useState(
    !getCookie(TRACKING_PERMISSION_TOKEN)
  );

  if (process.env.GATSBY_ACTIVE_ENV === ENV_STAGE) {
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
    if (process.env.GATSBY_ACTIVE_ENV !== ENV_STAGE) {
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
          för er, besökarna. Genom att klicka på den blå knappen godkänner du
          att jag använder cookies.{" "}
          <Link to="/cookie-policy">Läs mer om cookies</Link>
        </CookieText>
        <Button onClick={allowTracking}>Jag förstår</Button>
      </TrackingNoticeContent>
    </StyledTrackingNotice>
  );
}
