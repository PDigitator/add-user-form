import { useSelector } from "react-redux";
import { selectUsers, selectError, selectIsLoading } from "../redux/selectors";

import UserForm from "./UserForm/UserForm";
import UsersList from "./UsersList/UsersList";
import { Notification } from "./App.styled";

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const users = useSelector(selectUsers);

  return (
    <>
      <UserForm />
      {isLoading && !error && <p>Loading...</p>}
      {users.length ? (
        <UsersList />
      ) : (
        <Notification>There are no users</Notification>
      )}
    </>
  );
};

export default App;
