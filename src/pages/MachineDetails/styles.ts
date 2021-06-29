import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

export const MuiContainer = styled(Grid)`
  height: 100vh;
  padding: 1rem;
`;

export const CardComponent = styled(Card)`
   width: 100%;

   ${({theme}) => `
      background-color: ${theme.palette.primary.contrastText};
      color: ${theme.palette.common.darkGray};

      border-radius: ${theme.shape.borderRadius};
   `};
`;

export const CardComponentHeader = styled(CardHeader)`
   ${({theme}) => `
      background-color: ${theme.palette.primary.main};
      color: ${theme.palette.primary.contrastText};
   `};

   text-align: center;
`;

export const CardComponentContent = styled(CardContent)`
   margin: 5px;
   background: #F3F3F3;

   display: flex;
   align-items: center;
   justify-content: center;

   border: 0.942857px solid #A09F9F;
   box-sizing: border-box;
`;
