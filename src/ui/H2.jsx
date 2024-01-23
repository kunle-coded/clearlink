import styled, { css } from "styled-components";

const H2 = styled.h2`
  font-size: var(--font-xl);
  font-weight: 600;
  line-height: 3.75rem;
  letter-spacing: -0.96px;
  color: var(--gray-800);

  ${(props) =>
    props.align === "stretch" &&
    css`
      align-self: stretch;
    `}
`;

export default H2;
