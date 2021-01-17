import React from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";
import crossImg from "../../static/cross.svg";

const Modal = styled.div`
  display: ${props => (props.show ? "block" : "none")};
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 0 var(--side-margin-mobile);

  h2 {
    color: var(--background-color);
  }
`;

const Container = styled.div`
  position: relative;
  max-width: 500px;
  margin: 50vh auto;
  padding: var(--side-margin-mobile);
  background-color: var(--primary-color);
  text-align: center;
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(99, 99, 99, 0.2);

  @media (min-width: 768px) {
    margin-top: calc(50vh - (142px / 2));
  }
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 4px;
`;
const CloseIcon = styled.img`
  display: block;
  width: 24px;
  height: auto;
  cursor: pointer;
`;

const IconRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

export default function SocialShareModal({ isActive, setActive }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  );

  return (
    <Modal show={isActive}>
      <Container>
        <CloseButton onClick={() => setActive(!isActive)}>
          <CloseIcon src={crossImg} alt="" />
        </CloseButton>
        <h2>Dela Klimatklockan!</h2>
        <IconRow>
          <TwitterShareButton url={site.siteMetadata.siteUrl}>
            <TwitterIcon />
          </TwitterShareButton>
          <FacebookShareButton url={site.siteMetadata.siteUrl}>
            <FacebookIcon />
          </FacebookShareButton>
          <LinkedinShareButton url={site.siteMetadata.siteUrl}>
            <LinkedinIcon />
          </LinkedinShareButton>
          <EmailShareButton url={site.siteMetadata.siteUrl}>
            <EmailIcon />
          </EmailShareButton>
        </IconRow>
      </Container>
    </Modal>
  );
}
