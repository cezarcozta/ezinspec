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
  align-items: center;

  background-color: #F3F3F3;
;

  height: 95vh;
`;

export const Header = styled.header`
  height: 114.45946502685547px;
  width: 114.45946502685547px;
  left: 1.04052734375px;
  border-radius: 10.40540599822998px;
  background-color: #004BDCB0;

  align-items: flex-end;
  display: flex;
  flex-direction: column;

  margin-bottom: 25px;
`;

export const H1Header = styled(Typography)`
  color: #fff;

  margin-top: 12px;
  margin-right: 3px;

  font-weight: bold;
`;

export const H2Header = styled(Typography)`
  color: #fff;
  margin-right: 3px;

  font-weight: bold;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MuiButton = styled(Button)`
  background-color: #004BDCB0;
  color: #fff;

  height: 40px;
  width: 160px;
  border-radius: 10px;

  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;

  &:hover {
    background-color: #F3F3F3;
  }
`;

export const ButtonText = styled(Typography)`
  color: #fff;
  margin-right: 3px;

  font-weight: bold;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px;
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

  background-color: #FFF;

  height: 270px;
  width: 300px;
  border-radius: 10px;

`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignUpLink = styled(Link)`
  margin-top: 20px;
  text-decoration: none;
  color: #474747;

  &:hover {
    color: #c3c3c3;
  }
`;

export const ForgetPasswordLink = styled(Link)`
  margin-top: 20px;
  text-decoration: none;
  color: #474747;

  &:hover {
    color: #c3c3c3;
  }
`