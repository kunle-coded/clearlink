import styled from "styled-components";

const CheckWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

const CheckIcon = styled.div`
  display: flex;
  width: 28px;
  height: 28px;
  justify-content: center;
  align-items: center;
`;
const CheckText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
`;

const P = styled.p`
  color: var(--gray-600);
  font-size: var(--font-md);
  font-weight: 400;
  line-height: 2rem;
  align-self: stretch;
`;

function CheckItem({ children }) {
  return (
    <CheckWrapper>
      <CheckIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="29"
          viewBox="0 0 28 29"
          fill="none"
        >
          <path
            d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z"
            stroke="#175CD3"
            strokeWidth="2.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </CheckIcon>
      <CheckText>
        <P>{children}</P>
      </CheckText>
    </CheckWrapper>
  );
}

export default CheckItem;
