import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export const CardComponent = styled(Card)`
   width: 198px;

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

   border: 0.942857px solid #A09F9F;
   box-sizing: border-box;
`;

export const PowerContent = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const StateContent = styled.div`
   display: flex;
   flex-flow: column;
   align-items: center;
   justify-content: center;
`;

export const TimeContent = styled.div`
   display: flex;
   flex-flow: column;
   align-items: center;
   justify-content: center;
`;

export const Text = styled(Typography)``;