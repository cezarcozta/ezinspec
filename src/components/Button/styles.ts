import { Button } from "@material-ui/core";
import styled from 'styled-components';

export const ButtonComponent = styled(Button)`
   height: 40px;
   width: 160px;
   
   margin-top: 10px;

   ${({theme}) => `
      background-color: ${theme.palette.primary.main};
      color: ${theme.palette.primary.contrastText};

      border-radius: ${theme.shape.borderRadius};

      &:hover {
         background-color: ${theme.palette.secondary.main};
      }
   `};
   
   font-weight: bold;
`;