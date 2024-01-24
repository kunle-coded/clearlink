import styled from "styled-components";
import Logo from "../navbar/Logo";
import FooterLink from "../../ui/FooterLink";
import AppStore from "../icons/AppStore";
import GooglePlay from "../icons/GooglePlay";

const Section = styled.section`
  display: flex;
  padding: 96px 110px 48px 110px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

const LogoContainer = styled.div`
  display: flex;
  max-width: 28%;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

const CompanyText = styled.p`
  font-weight: 400;
  line-height: 1.75rem;
  color: var(--gray-600);
  align-self: stretch;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 72px;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const LinksTitle = styled.p`
  color: var(--gray-500);
  font-size: var(--font-xs);
  font-weight: 500;
  line-height: 1.5rem;
  align-self: stretch;
`;

const Links = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

const AppsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  max-width: 20%;
`;

const AppsTitle = styled.p`
  font-size: var(--font-xs);
  font-weight: 600;
  line-height: 1.5rem;
  color: var(--blue-dark-700);
`;

const AppsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

function FooterTop() {
  return (
    <Section>
      <Container>
        <LogoContainer>
          <Logo />
          <CompanyText>
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </CompanyText>
        </LogoContainer>

        <LinksContainer>
          <LinksWrapper>
            <LinksTitle>Products</LinksTitle>
            <Links>
              <FooterLink>Overview</FooterLink>
              <FooterLink>Features</FooterLink>
              <FooterLink>Solutions</FooterLink>
              <FooterLink>Tutorials</FooterLink>
              <FooterLink>Pricing</FooterLink>
            </Links>
          </LinksWrapper>
          <LinksWrapper>
            <LinksTitle>Company</LinksTitle>
            <Links>
              <FooterLink>About us</FooterLink>
              <FooterLink>Careers</FooterLink>
              <FooterLink>Press</FooterLink>
              <FooterLink>News</FooterLink>
              <FooterLink>Contact</FooterLink>
            </Links>
          </LinksWrapper>
          <LinksWrapper>
            <LinksTitle>Resources</LinksTitle>
            <Links>
              <FooterLink>Blog</FooterLink>
              <FooterLink>Events</FooterLink>
              <FooterLink>Help Centre</FooterLink>
              <FooterLink>Tutorials</FooterLink>
              <FooterLink>Support</FooterLink>
            </Links>
          </LinksWrapper>
          <LinksWrapper>
            <LinksTitle>Legal</LinksTitle>
            <Links>
              <FooterLink>Terms</FooterLink>
              <FooterLink>Privacy</FooterLink>
              <FooterLink>Cookies</FooterLink>
              <FooterLink>Licenses</FooterLink>
              <FooterLink>Contact</FooterLink>
            </Links>
          </LinksWrapper>
        </LinksContainer>

        <AppsContainer>
          <AppsTitle>Get the app</AppsTitle>
          <AppsWrapper>
            <AppStore />
            <GooglePlay />
          </AppsWrapper>
        </AppsContainer>
      </Container>
    </Section>
  );
}

export default FooterTop;
