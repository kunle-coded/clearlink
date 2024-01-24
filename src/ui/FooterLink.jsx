import styled from "styled-components";

const List = styled.li`
  display: flex;
  align-items: center;
  font-weight: 500;
  line-height: 1.5rem;
  align-self: stretch;

  a {
    color: var(--gray-700);
    text-decoration: none;
  }
`;

function FooterLink({ children }) {
  return (
    <List>
      <a href={children.toLowerCase()}>{children}</a>
    </List>
  );
}

export default FooterLink;
