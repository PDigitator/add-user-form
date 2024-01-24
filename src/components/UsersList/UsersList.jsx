import { useSelector } from "react-redux";

import { selectUsers } from "../../redux/selectors";

import { List, ListItem } from "./UsersList.styled";

const UsersList = () => {
  const users = useSelector(selectUsers);

  return (
    <List>
      {users.map(({ id, firstName, lastName, email }) => (
        <ListItem key={id}>
          <p>
            {firstName} {lastName}
          </p>
          <p>{email}</p>
        </ListItem>
      ))}
    </List>
  );
};

export default UsersList;
