import styled, { css } from "styled-components";

const sizes = {
  regular: css`
    padding: 14px 24px;
    font-size: var(--font-xs);
    font-weight: 600;
    line-height: 1.5rem;
  `,

  big: css`
    padding: 16px 28px;
    font-size: var(--font-regular);
    font-weight: 600;
    line-height: 1.55rem;
  `,
};

const variations = {
  primary: css`
    background-color: var(--blue-700);
    color: var(--base-white);
    border: none;
  `,

  secondary: css`
    background-color: var(--base-white);
    border: 1px solid var(--gray-400);
    color: var(--gray-900);
  `,
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 100px;
  box-shadow: var(--box-shadow-xs);
  font-size: var(--font-xs);
  font-weight: 600;
  line-height: 1.5rem;
  cursor: pointer;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  size: "regular",
  variation: "primary",
};

export default Button;
