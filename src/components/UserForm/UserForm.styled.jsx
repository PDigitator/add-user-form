import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

export const StyledUserForm = styled.div`
  max-width: 560px;
  margin: auto;
  margin-top: 40px;
  padding: 20px;
  border: 1px solid #768696;
  border-radius: 8px;
  background: rgb(243, 246, 249);
`;

export const StyledTextField = styled(TextField)`
  && {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const StyledButton = styled(Button)`
  && {
    width: 100%;
    height: 56px;
    font-size: 20px;
    letter-spacing: 2px;
    background: #768696;
    &:hover,
    &:focus {
      background: #265c93;
    }
  }
`;
