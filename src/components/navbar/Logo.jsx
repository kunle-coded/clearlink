import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Span = styled.span`
  color: var(--blue-dark-400);
`;

const Text = styled.p`
  display: flex;
  color: var(--gray-900);
  font-size: var(--font-md);
  font-weight: 600;
  line-height: normal;
`;

function Logo() {
  return (
    <Container>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="28"
          viewBox="0 0 26 28"
          fill="none"
        >
          <path
            d="M19.7058 16.9781L23.6024 13.0815C23.6024 10.4095 22.9344 7.84888 21.7098 5.62224L12.6362 14.0278V28H14.3619C20.4295 28 25.3837 23.1014 25.3837 16.9781H19.7058Z"
            fill="#1570EF"
          />
          <path
            d="M5.67793 11.0219L1.78131 14.9185C1.78131 17.5905 2.4493 20.1511 3.67396 22.3777L12.7475 13.9722V0H11.0219C4.95427 0 0 4.89861 0 11.0219H5.67793Z"
            fill="#53B1FD"
          />
        </svg>
      </span>
      <Text>
        ClearLink <Span>.</Span>
      </Text>
    </Container>
  );
}

export default Logo;
