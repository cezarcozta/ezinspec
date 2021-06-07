import ConnectionStatus from "../../components/Connection";
import { MuiContainer, MuiTypography } from "./styles";


const Machines = () => {

  return (
    <MuiContainer>

      <MuiTypography variant="h3">Machines</MuiTypography>
      <ConnectionStatus />
    </MuiContainer>
  );
};

export default Machines;
