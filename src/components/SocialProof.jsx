import styled from "styled-components";
import Spotify from "./brands/Spotify";
import Coinbase from "./brands/Coinbase";
import Dropbox from "./brands/Dropbox";
import Intercom from "./brands/Intercom";
import Marvel from "./brands/Marvel";
import Automatic from "./brands/Automatic";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: var(--padding-secondary);
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding: 0px 32px;

  svg {
    width: 141px;
  }
`;

const P = styled.p`
  text-align: center;
  font-size: var(--font-sm);
  font-weight: 500;
  line-height: 30px;
  color: var(--gray-600);
`;

const BrandsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 69px;
`;

function SocialProof() {
  return (
    <Section>
      <Container>
        <P>
          Join 1,500+ companies already video conferencing the ClearLink way
        </P>

        <BrandsContainer>
          <Spotify />
          <Coinbase />
          <Dropbox />
          <Intercom />
          <Marvel />
          <Automatic />
        </BrandsContainer>
      </Container>
    </Section>
  );
}

export default SocialProof;
