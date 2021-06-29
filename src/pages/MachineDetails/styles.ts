import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

export const MuiContainer = styled(Grid)`
  height: 100vh;
  width: 100%;
  display: flex;
flex-direction: row;

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

export const Row = styled.div`
   display: flex;
   flex-direction: row;
`;

export const ProductionComponent = styled(Card)`
   width:60%;

   margin: 0.5rem;

   ${({theme}) => `
      background-color: ${theme.palette.primary.contrastText};
      color: ${theme.palette.common.darkGray};

      border-radius: ${theme.shape.borderRadius};
   `};
`;

export const HistoricComponent = styled(Card)`
   width:99%;

   ${({theme}) => `
      background-color: ${theme.palette.primary.contrastText};
      color: ${theme.palette.common.darkGray};

      border-radius: ${theme.shape.borderRadius};
   `};
`;

export const TimeComponent = styled(Card)`
   width:40%;

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

