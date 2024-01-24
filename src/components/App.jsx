import { useSelector } from "react-redux";
import { useGetUsersQuery } from "../redux/operations"; //!

import { selectUsers, selectError, selectIsLoading } from "../redux/selectors";

import UserForm from "./UserForm/UserForm";
import UsersList from "./UsersList/UsersList";
import { Notification } from "./App.styled";
import { useEffect } from "react";

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const { refetch } = useGetUsersQuery();

  useEffect(() => {
    refetch();
  }, [refetch]);

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
