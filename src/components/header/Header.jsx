import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import Hero from "./Hero";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 160px;
  padding: 40px 128px 66px 128px;
  background: url("rows.png");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
`;

function Header() {
  return (
    <StyledHeader>
      <Navbar />
      <Hero />
    </StyledHeader>
  );
}

export default Header;
