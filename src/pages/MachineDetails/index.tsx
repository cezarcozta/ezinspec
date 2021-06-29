import { useLocation } from "react-router-dom";
import { useMachine } from "../../contexts/Machines";
import {
  CardComponent,
  CardComponentContent,
  CardComponentHeader,
  MuiContainer,
} from "./styles";

interface IState {
  idMachine: string;
}

const Details = () => {
  const { state } = useLocation();

  const machineId = (state as IState).idMachine;

  const { findMachineById } = useMachine();

  const machine = findMachineById(machineId);

  return (
    <MuiContainer container>
      <CardComponent>
        <CardComponentHeader title={machine.machineName} />
        <CardComponentContent>TABLES</CardComponentContent>
      </CardComponent>
    </MuiContainer>
  );
};

export default Details;
