import styled from "styled-components";
import LinkedIn from "../icons/LinkedIn";
import Twitter from "../icons/Twitter";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import GitHub from "../icons/GitHub";
import YouTube from "../icons/YouTube";

const Section = styled.section`
  display: flex;
  padding: 48px 0px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: 64px;
  background: var(--gray-50);
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px 110px;
  gap: 64px;
  width: 100%;
`;

const ContainerInner = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  align-self: stretch;
`;

const Copyright = styled.p`
  flex: 1 0 0;
  color: var(--gray-500);
  font-size: var(--font-xs);
  font-weight: 400;
  line-height: 1.5rem;
`;

const SocialLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  svg {
    cursor: pointer;
  }
`;

const SocialIconContainer = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

const SocialIcon2Container = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  padding: 0px 0.014px 0.005px 0px;
  justify-content: center;
  align-items: center;
`;

const SocialIcon3Container = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  padding: 3.558px 0px 3.562px 0px;
  justify-content: center;
  align-items: center;
`;

function FooterBottom() {
  return (
    <Section>
      <Container>
        <ContainerInner>
          <Copyright>© 2023 ClearLink. All rights reserved.</Copyright>

          <SocialLinksContainer>
            <SocialIconContainer>
              <LinkedIn />
            </SocialIconContainer>
            <Twitter />
            <Facebook />
            <SocialIcon2Container>
              <Instagram />
            </SocialIcon2Container>
            <GitHub />
            <SocialIcon3Container>
              <YouTube />
            </SocialIcon3Container>
          </SocialLinksContainer>
        </ContainerInner>
      </Container>
    </Section>
  );
}

export default FooterBottom;
