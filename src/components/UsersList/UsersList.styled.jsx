import styled from "styled-components";

const List = styled.ul`
  max-width: 560px;
  margin: auto;
  margin-top: 40px;
  padding: 20px;
  border: 1px solid #768696;
  border-radius: 8px;
  background: rgb(243, 246, 249);
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  padding: 10px 20px;
  border: 1px solid #e5eaf1;
  border-radius: 8px;
  background-color: #fff;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export { List, ListItem };
