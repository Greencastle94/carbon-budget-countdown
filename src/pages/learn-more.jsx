import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import BackButton from "../components/BackButton";
import ExternalLink from "../components/ExternalLink";
import ContentWrapper from "../components/ContentWrapper";

const Container = styled.div`
  margin-bottom: 32px;

  p,
  h3,
  a {
    max-width: 700px;
    margin-right: auto;
    margin-left: auto;
  }

  a {
    margin-bottom: 16px;
  }
`;

export default function LearnMorePage() {
  return (
    <Layout>
      <PageTitle>Vad vill du veta mer om?</PageTitle>

      <ContentWrapper>
        <Container>
          <h3>Fakta om klimatet</h3>
          <p>
            Hur påverkar koldioxid klimatet? Vad är effekterna av ett varmare
            klimat? DN svarar på dessa och många fler frågor om klimatet på
            deras klimatsida. De viger hela sidan åt att visa på fakta om
            klimatet och visa vart vi är på väg i ett globalt perspektiv.
          </p>
          <ExternalLink href="https://www.dn.se/klimatet-just-nu/">
            DN's klimatsida
          </ExternalLink>
        </Container>

        <Container>
          <h3>Hållbara livsstilsval</h3>
          <p>
            Vill du dra ditt strå till stacken och minska din påverkan på miljön
            och klimatet? Vad kan man göra då? Naturskyddsföreningen har både
            givit ut en bok och skrivit flertalet artiklar på deras hemsida om
            just det.
          </p>
          <ExternalLink href="https://www.naturskyddsforeningen.se/vad-du-kan-gora/gron-guide">
            Artiklar
          </ExternalLink>
          <ExternalLink href="https://www.naturskyddsforeningen.se/ett-hallbart-liv">
            Bok
          </ExternalLink>
        </Container>

        <Container>
          <h3>Ditt koldioxidavtryck</h3>
          <p>
            Vill du veta hur stort ditt klimatavtryck är? Kanske också veta hur
            mycket du behöver minska det för att nå en hållbar nivå? IVL Svenska
            miljöinstitutet har utvecklat tjänsten "Klimatkontot" vilket är en
            klimatkalkylator. Genom att svara på diverse livsstilsfrågor får man
            en uppskattad siffra på hur mycket CO<sub>2</sub> man släpper ut på
            ett år. Om du inte orkar att hela tiden behöva fylla i och uppdatera
            efter förändringar du gör i ditt liv finns Svalna som har
            automatiserat den processen.
          </p>
          <ExternalLink href="https://www.klimatkontot.se/">
            Klimatkontot
          </ExternalLink>
          <ExternalLink href="https://www.svalna.se/">Svalna</ExternalLink>
        </Container>

        <Container>
          <h3>Hantera klimatsamtal</h3>
          <p>
            Hur pratar man med folk om klimatet? Hur hanterar man vissa
            situationer eller argument? Klimatprata är en organisation som
            fokuserar på just det området, att prata om klimatet. De ger råd och
            tips på vad man kan svara eller hur man kan hantera olika
            situationer.
          </p>
          <ExternalLink href="https://klimatprata.se/">
            Klimatprata
          </ExternalLink>
        </Container>

        <BackButton to="/" />
      </ContentWrapper>
    </Layout>
  );
}
