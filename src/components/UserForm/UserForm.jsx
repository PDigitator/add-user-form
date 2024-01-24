import React from "react";
import { useSelector } from "react-redux";
import { selectUsers } from "../../redux/selectors";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useCreateUserMutation } from "../../redux/operations";

import {
  StyledUserForm,
  StyledTextField,
  StyledButton,
} from "./UserForm.styled";

const UserForm = () => {
  const users = useSelector(selectUsers);

  const [createUser, { data, error, isLoading }] = useCreateUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const { name, surname, email } = form.elements;
    const newUser = {
      firstName: name.value,
      lastName: surname.value,
      email: email.value,
    };

    if (
      users.some(
        (user) => user.firstName.toLowerCase() === name.value.toLowerCase()
      ) &&
      users.some(
        (user) => user.lastName.toLowerCase() === surname.value.toLowerCase()
      ) &&
      users.some(
        (user) => user.email.toLowerCase() === email.value.toLowerCase()
      )
    ) {
      Notify.info("This user has already been added.");
    } else {
      await createUser(newUser);
    }

    form.reset();
  };

  if (data) {
    Notify.success("User successfully created!");
  }

  if (error) {
    console.error("Error creating user:", error);

    Notify.failure("Error creating user. Please try again.");
  }

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
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </StyledButton>
      </form>
    </StyledUserForm>
  );
};

export default UserForm;
