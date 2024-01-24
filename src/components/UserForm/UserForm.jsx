import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../../redux/selectors";
import { api } from "../../redux/operations";

import {
  StyledUserForm,
  StyledTextField,
  StyledButton,
} from "./UserForm.styled";

const UserForm = () => {
  // const users = useSelector(selectUsers);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const { name, surname, email } = form.elements;
    const newUser = {
      firstName: name.value,
      lastName: surname.value,
      email: email.value,
    };

    dispatch(api.endpoints.createUser(newUser));

    form.reset();
  };

  return (
    <StyledUserForm>
      <form onSubmit={handleSubmit}>
        <StyledTextField required label="Name" name="name" variant="outlined" />
        <StyledTextField
          required
          label="Surname"
          name="surname"
          variant="outlined"
        />
        <StyledTextField
          required
          label="Email"
          type="email"
          name="email"
          variant="outlined"
        />
        <StyledButton
          type="submit"
          variant="contained"
          color="primary"
          size="large"
        >
          Submit
        </StyledButton>
      </form>
    </StyledUserForm>
  );
};

export default UserForm;
