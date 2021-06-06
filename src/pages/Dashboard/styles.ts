import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import styled from 'styled-components';

export const MuiContainer = styled(Grid)`
  height: 95vh;
`;

export const TitleContainer = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Typography)`
  ${({theme}) => `
      color: ${theme.palette.primary.main};
   `};
`;

export const Item = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`; 