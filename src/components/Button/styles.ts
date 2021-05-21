import { Button } from '@material-ui/core';
import styled from 'styled-components';

// enum VARIANT {
//    primary: blue,
//    secondary: red,
// }

// type IButton {

// }

export const ButtonComponent = styled(Button)`
   height: 40px;
   width: 160px;
   border-radius: 10px;

   ${({theme}) => `
      background-color: ${theme.palette.primary.main};
      color: ${theme.palette.primary.contrastText};
   `}

   font-weight: bold;
   box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
   padding: 7px 14px;
   &:hover {
      background-color: #c3c3c3;
   }
`;