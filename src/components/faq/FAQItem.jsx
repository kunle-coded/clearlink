import styled, { css } from "styled-components";
import PlusMinus from "../icons/PlusMinus";

const List = styled.li`
  display: flex;
  padding: 22px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background: var(--base-white);
  border-bottom: 1px solid var(--gray-200);
  cursor: pointer;

  ${(props) =>
    props.hidden === false &&
    css`
      border-radius: 16px;
      border: 1px solid var(--gray-200);
      background: var(--gray-50);
    `}
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
`;

const ItemInnerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;

const ItemContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
  max-height: 300px;
  overflow: hidden;
  transition: height 250ms;
`;

const ItemIconWrapper = styled.div`
  display: flex;
  padding-top: 2px;
  flex-direction: column;
  align-items: flex-start;
`;

const ItemHeading = styled.p`
  font-size: var(--font-sm);
  font-weight: 600;
  line-height: 1.8rem;
  color: var(--gray-900);
  align-self: stretch;
`;

const ItemBody = styled.p`
  font-size: var(--font-regular);
  font-weight: 400;
  line-height: 1.75rem;
  color: var(--gray-600);
  align-self: stretch;
`;

function FAQItem({ title, children, index, active, onClick }) {
  return (
    <List hidden={active !== index} onClick={onClick}>
      <ItemWrapper>
        <ItemInnerWrapper>
          <ItemContentWrapper>
            <ItemHeading>{title}</ItemHeading>
            {active === index ? (
              <ItemBody aria-hidden={active !== index}>{children}</ItemBody>
            ) : null}
          </ItemContentWrapper>
          <ItemIconWrapper>
            <PlusMinus hidden={active !== index} />
          </ItemIconWrapper>
        </ItemInnerWrapper>
      </ItemWrapper>
    </List>
  );
}

export default FAQItem;
