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

export const ProductionComponent = styled(Card)`
   width:75%;

   margin: 0.5rem;

   ${({theme}) => `
      background-color: ${theme.palette.primary.contrastText};
      color: ${theme.palette.common.darkGray};

      border-radius: ${theme.shape.borderRadius};
   `};
`;

export const HistoricComponent = styled(Card)`
   width:100%;

   margin: 0.5rem;

   ${({theme}) => `
      background-color: ${theme.palette.primary.contrastText};
      color: ${theme.palette.common.darkGray};

      border-radius: ${theme.shape.borderRadius};
   `};
`;

export const TimeComponent = styled(Card)`
   width:25%;

   margin: 0.5rem;

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

export const InsideCardComponentHeader = styled(CardHeader)`
   ${({theme}) => `
      background-color: ${theme.palette.primary.main};
      color: ${theme.palette.primary.contrastText};
   `};
   height: 2rem;
   text-align: center;
`;


export const TablesRealTimeContainer = styled(CardContent)`
   margin: 5px;
   background: #F3F3F3;

   display: flex;
   align-items: flex-start;
   justify-content: flex-start;

   border: 0.942857px solid #A09F9F;
   box-sizing: border-box;
   height: 25%;
`;

export const TableHistoricContainer = styled(CardContent)`
   margin: 5px;
   background: #F3F3F3;

   display: flex;
   align-items: flex-start;
   justify-content: flex-start;

   border: 0.942857px solid #A09F9F;
   box-sizing: border-box;
   height: 75%;
`;

