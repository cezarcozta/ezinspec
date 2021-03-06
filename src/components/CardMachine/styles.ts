import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
`;

export const CardComponent = styled(Card)`
   width: 288px;

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

type IData = {
   isData: boolean;
}

export const CardComponentContent = styled(CardContent)<IData>`
   margin: 5px;
   background: #F3F3F3;

   display: flex;
   align-items: center;
   flex-direction: ${props => props.isData ? 'column': 'row'};
   justify-content: center;

   border: 0.942857px solid #A09F9F;
   box-sizing: border-box;

   span{
      font-size: small;
   }
`;

export const PowerContent = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;

   div{
      height: 40px;
      width: 85px;
      border-radius: 0px;

      display: flex;
      align-items: center;
      justify-content: center;
   }

   .on {
      background-color: #00D23B;
      color: #fff;
   }
   .off {
      background-color: #F31818;
      color: #fff;
   }
`;

export const StateContent = styled.div`
   display: flex;
   flex-flow: row;
   align-items: center;
   justify-content: center;

   .auto {
      background-color: #00D23B;
      color: #fff;
      font-size: bold;
   }
   .stopped {
      background-color: #F31818;
      color: #fff;
      font-size: bold;
   }
   .manual {
      background-color: #F6FB07;
      color: #fff;
      font-size: bold;
   }
`;

export const TimeContent = styled.div`
   /* display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center; */
`;

export const Text = styled(Typography)``;
