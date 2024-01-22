import styled from "styled-components";
import Logo from "./Logo";
import ArrowDown from "../icons/ArrowDown";
import Button from "../../ui/Button";

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Nav = styled.nav`
  display: flex;
  width: inherit;
  padding: 16px 32px;
  justify-content: space-between;
  align-items: center;
  border-radius: 100px;
  border: 1px solid var(--gray-300);
  background: var(--gray-100);
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 40px;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

function Navbar() {
  return (
    <Container>
      <Nav>
        <Logo />
        <NavMenu>
          <MenuItem>
            Products
            <span>
              <ArrowDown />
            </span>
          </MenuItem>
          <MenuItem>
            Solutions
            <span>
              <ArrowDown />
            </span>
          </MenuItem>
          <MenuItem>
            Resources
            <span>
              <ArrowDown />
            </span>
          </MenuItem>
          <MenuItem>Pricing</MenuItem>
        </NavMenu>

        <ButtonWrapper>
          <Button variation="secondary">Talk to sales</Button>
          <Button>Sign up for free</Button>
        </ButtonWrapper>
      </Nav>
    </Container>
  );
}

export default Navbar;
