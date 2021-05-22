import { TextField } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import styled from 'styled-components';


export const MuiContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #F3F3F3;
;

  height: 95vh;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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


export const ForgetPasswordLink = styled(Link)`
  margin-top: 20px;
  text-decoration: none;
  color: #474747;

  &:hover {
    color: #c3c3c3;
  }
`