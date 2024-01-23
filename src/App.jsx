import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/header/Header";
import SocialProof from "./components/SocialProof";
import ClearLinkAdvantage from "./components/advantage/ClearLinkAdvantage";
import Testimonials from "./components/testimonial/Testimonials";
import FAQ from "./components/faq/FAQ";
import Banner from "./components/banner/Banner";
import FooterTop from "./components/footers/FooterTop";
import FooterBottom from "./components/footers/FooterBottom";

const StyledApp = styled.main`
  min-height: 100vh;
  flex-direction: column;
  overflow: hidden;
`;

function App() {
  return (
    <StyledApp>
      <GlobalStyles />
      <div>
        <Header />
        <SocialProof />
        <ClearLinkAdvantage />
        <Testimonials />
        <FAQ />
        <Banner />
        <FooterTop />
        <FooterBottom />
      </div>
    </StyledApp>
  );
}

export default App;
