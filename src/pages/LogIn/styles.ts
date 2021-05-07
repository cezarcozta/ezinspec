import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import styled from 'styled-components';

export const MuiContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 95vh;
`;

export const MuiButton = styled(Button)`
  background-color: black;
  color: #fff;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  &:hover {
    background-color: #c3c3c3;
  }
`;
export const MuiTypography = styled(Typography)`
  
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const Input = styled(TextField)`
  margin: 2.5px;
  width: 350px;
`;

export const Card = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignUpLink = styled(Link)`
  margin-top: 20px;
  text-decoration: none;
`;