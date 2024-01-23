import styled from "styled-components";
import H2 from "../../ui/H2";
import CheckItem from "../../ui/CheckItem";
import Button from "../../ui/Button";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: var(--padding-primary);
`;

const LeftContainer = styled.div`
  display: flex;
  width: 579px;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  flex-shrink: 0;
`;
const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
`;

const ChecksContainer = styled.div`
  display: flex;
  padding-left: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RightInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px 0px 0px 0px;
  border-top: 8px solid var(--gray-900);
  border-left: 8px solid var(--gray-900);
  height: 582px;
  overflow: hidden;
`;

const Image = styled.img`
  border-radius: 8px 0px 0px 0px;
  flex-shrink: 0;
  background-size: cover;
  background-repeat: no-repeat;
  height: 582px;
`;

function Banner() {
  return (
    <Section>
      <LeftContainer>
        <ContentContainer>
          <H2>Ready to clear the path to perfect communication?</H2>
          <ChecksContainer>
            <CheckItem>30 days free trial</CheckItem>
            <CheckItem>Cancel at any time</CheckItem>
            <CheckItem>Access to all features</CheckItem>
            <CheckItem>Peronalized onboarding</CheckItem>
          </ChecksContainer>
        </ContentContainer>
        <ButtonContainer>
          <Button variation="secondary">Talk to sales</Button>
          <Button>Start your free trial</Button>
        </ButtonContainer>
      </LeftContainer>
      <RightContainer>
        <RightInner>
          <div>
            <Image src="assets/banner-img.png" />
          </div>
        </RightInner>
      </RightContainer>
    </Section>
  );
}

export default Banner;
