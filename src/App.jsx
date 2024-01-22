import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/header/Header";
import SocialProof from "./components/SocialProof";

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
      </div>
    </StyledApp>
  );
}

export default App;
