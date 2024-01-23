import React from "react";
import {
  StyledUserForm,
  StyledTextField,
  StyledButton,
} from "./UserForm.styled";

const UserForm = () => {
  // Обробник події для кнопки Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Додайте ваш логіку обробки події тут
  };

  return (
    <StyledUserForm>
      <form onSubmit={handleSubmit}>
        <StyledTextField required label="Ім'я" variant="outlined" />
        <StyledTextField required label="Прізвище" variant="outlined" />
        <StyledTextField
          required
          label="Email"
          type="email"
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
