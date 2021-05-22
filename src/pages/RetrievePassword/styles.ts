import { TextField } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import styled from 'styled-components';

export const MuiContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 95vh;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

export const Input = styled(TextField)`
  margin: 2.5px;
  width: 350px;
`;

export const MuiInput = styled(TextField)`
  height: 40px;
  width: 264px;

  margin: 7px;

  border-radius: 10px;

  background: #F4F4F4;
`;

export const MuiCard = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #FFF;

  height: 270px;
  width: 300px;
  border-radius: 10px;
`;