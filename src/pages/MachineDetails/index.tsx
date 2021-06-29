import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useHistory, useLocation } from "react-router-dom";
import ButtonComponent from "../../components/Button";
import { useMachine } from "../../contexts/Machines";
import {
  CardComponent,
  CardComponentHeader,
  HistoricComponent,
  InsideCardComponentHeader,
  MuiContainer,
  ProductionComponent,
  Row,
  TimeComponent,
} from "./styles";

interface IState {
  idMachine: string;
}

const Details = () => {
  const { state } = useLocation();
  const { goBack } = useHistory();

  const machineId = (state as IState).idMachine;

  const { findMachineById } = useMachine();

  const machine = findMachineById(machineId);

  return (
    <MuiContainer container>
      <CardComponent>
        <CardComponentHeader
          title={machine.machineName}
          action={
            <ButtonComponent onClick={goBack}>
              <ChevronLeftIcon />
              Voltar
            </ButtonComponent>
          }
        />
        <Row>
          <ProductionComponent>
            <InsideCardComponentHeader title="Produção em curso" />
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Data/Hora</TableCell>
                    <TableCell>Nº Ciclo</TableCell>
                    <TableCell>Ciclo</TableCell>
                    <TableCell>Injeção</TableCell>
                    <TableCell>Dosagem</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell scope="row">Data</TableCell>
                    <TableCell scope="row">Data</TableCell>
                    <TableCell scope="row">Data</TableCell>
                    <TableCell scope="row">Data</TableCell>
                    <TableCell scope="row">Data</TableCell>
                    <TableCell scope="row">Data</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell scope="row">Data</TableCell>
                    <TableCell scope="row">Data</TableCell>
                    <TableCell scope="row">Data</TableCell>
                    <TableCell scope="row">Data</TableCell>
                    <TableCell scope="row">Data</TableCell>
                    <TableCell scope="row">Data</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </ProductionComponent>

          <TimeComponent>
            <InsideCardComponentHeader title="Tempos" />
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
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
                    <TableCell scope="row"></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </TimeComponent>
        </Row>

        <HistoricComponent>
          <InsideCardComponentHeader title="Histórico de produção" />
          <TableContainer style={{ margin: "10px" }}>
            <Table stickyHeader size="small">
              <TableHead>
                <TableRow>
                  <TableCell size="small">Início</TableCell>
                  <TableCell size="small">Fim</TableCell>
                  <TableCell size="small">Ciclos Totais</TableCell>
                  <TableCell size="small">Ciclo Máx</TableCell>
                  <TableCell size="small">Ciclo Min</TableCell>
                  <TableCell size="small">Ciclo Méd</TableCell>
                  <TableCell size="small">Injeção Máx</TableCell>
                  <TableCell size="small">Injeção Min</TableCell>
                  <TableCell size="small">Injeção Mé</TableCell>
                  <TableCell size="small">Dosagem Máx</TableCell>
                  <TableCell size="small">Dosagem Min</TableCell>
                  <TableCell size="small">Dosagem Méd</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                  <TableCell scope="row">Data</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </HistoricComponent>
      </CardComponent>
    </MuiContainer>
  );
};

export default Details;
