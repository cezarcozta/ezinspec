import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { useMachine } from "../../contexts/Machines";
import {
  CardComponent,
  CardComponentHeader,
  HistoricComponent,
  InsideCardComponentHeader,
  MuiContainer,
  ProductionComponent,
  TableHistoricContainer,
  TablesRealTimeContainer,
  TimeComponent,
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

        <TablesRealTimeContainer>
          <ProductionComponent>
            <InsideCardComponentHeader title="Produção em curso" />
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Data/Hora</TableCell>
                    <TableCell>Nº Ciclo</TableCell>
                    <TableCell>Ciclo</TableCell>
                    <TableCell>Injeção</TableCell>
                    <TableCell>Dosagem</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </ProductionComponent>

          <TimeComponent>
            <InsideCardComponentHeader title="Tempos" />
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Ciclo</TableCell>
                    <TableCell>Injeção</TableCell>
                    <TableCell>Dosagem</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* <TableColumn>
                    <TableCell>Mínimo</TableCell>
                    <TableCell>Máximo</TableCell>
                    <TableCell>Médio</TableCell>
                  </TableColumn> */}
                  <TableRow>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </TimeComponent>
        </TablesRealTimeContainer>

        <TableHistoricContainer>
          <HistoricComponent>
            <InsideCardComponentHeader title="Histórico de produção" />
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Início</TableCell>
                    <TableCell>Fim</TableCell>
                    <TableCell>Ciclos Totais</TableCell>
                    <TableCell>Ciclo Máximo</TableCell>
                    <TableCell>Ciclo Minimo</TableCell>
                    <TableCell>Ciclo Médio</TableCell>
                    <TableCell>Injeção Máximo</TableCell>
                    <TableCell>Injeção Minimo</TableCell>
                    <TableCell>Injeção Médio</TableCell>
                    <TableCell>Dosagem Máximo</TableCell>
                    <TableCell>Dosagem Minimo</TableCell>
                    <TableCell>Dosagem Médio</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </HistoricComponent>
        </TableHistoricContainer>
      </CardComponent>
    </MuiContainer>
  );
};

export default Details;
