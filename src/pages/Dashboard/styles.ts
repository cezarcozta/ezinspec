import { Container, Typography } from "@material-ui/core";
import styled from 'styled-components';


export const MuiContainer = styled(Container)`
  height: 95vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled(Typography)`
  ${({theme}) => `
      color: ${theme.palette.primary.main};
   `};
`;