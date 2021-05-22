import { TextField, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import styled from 'styled-components';


export const MuiContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #F3F3F3;

  height: 95vh;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
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

  max-width: 300px;

  ${({theme}) => `
      background-color: ${theme.palette.primary.contrastText};
      color: ${theme.palette.common.darkGray};

      border-radius: ${theme.shape.borderRadius};
   `};
`;

export const MuiText = styled(Typography)`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;

  margin: 5px;
`;