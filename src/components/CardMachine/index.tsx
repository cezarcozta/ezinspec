import { Chip } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import RefreshIcon from "@material-ui/icons/Refresh";
import { IMessageStructure } from "mqtt-react-hooks";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useMachine } from "../../contexts/Machines";
import { dataBRFormatter } from "../../utils/BRISODateFormatter";
import Button from "../Button";
import {
  CardComponent,
  CardComponentContent,
  CardComponentHeader,
  Container,
  PowerContent,
  StateContent,
} from "./styles";

type IDataLatest = {
  ciclo: number;
  dataInicial: Date;
  tc: number;
  td: number;
  tempoCicloAcumulado: number;
  ti: number;
};

type IDataProduction = Pick<
  IDataLatest,
  "ciclo" | "dataInicial" | "tc" | "td" | "ti"
>;

type ICardMachine = {
  id: string;
  title: string;
  messages: IMessageStructure;
  staticMessages: any[];
  latestTopic: string;
  stateTopic: string;
  productionTopic: string;
  index: number;
};

const CardMachine: React.FC<ICardMachine> = ({
  id,
  title,
  messages,
  staticMessages,
  latestTopic,
  stateTopic,
  productionTopic,
  index,
}) => {
  const { push } = useHistory();

  const { deleteMachine } = useMachine();

  const [machineState, setMachineState] = useState<string>();
  const [machineLatest, setMachineLatest] = useState<IDataLatest>(
    {} as IDataLatest
  );

  // const [machineProduction, setMachineProduction] = useState<IDataProduction>(
  //   {} as IDataProduction
  // );

  useEffect(() => {
    setMachineState(
      staticMessages &&
        staticMessages.find((msg) => msg.topic === stateTopic)?.message
    );

    setMachineLatest(
      messages.topic === latestTopic ? JSON.parse(messages.message) : {}
    );

    // setMachineProduction(
    //   messages.topic === productionTopic ? JSON.parse(messages.message) : {}
    // );
  }, [latestTopic, stateTopic, messages, staticMessages]);

  const handleDetails = () => {
    push(`/machines/${id}`, {
      idMachine: id,
    });
  };
  const handleDelete = async () => {
    await deleteMachine(id);
  };
  const handleRefresh = () => {
    return;
  };
  console.log("machineLatest.ciclo", machineLatest.ciclo);
  return (
    <Container>
      <CardComponent>
        <CardComponentHeader title={title} />

        <CardComponentContent isData={false}>
          <PowerContent>
            <div className={machineState === "3" ? "on" : ""}>ON</div>
            <div className={machineState !== "3" ? "off" : ""}>OFF</div>
          </PowerContent>
        </CardComponentContent>

        <CardComponentContent isData={false}>
          <StateContent>
            <Chip
              className={machineState !== "3" ? "stopped" : ""}
              label="PARADA"
              size="small"
              style={{ margin: "2px" }}
            />
            <Chip
              className={
                machineState !== "3"
                  ? machineState === "2"
                    ? "manual"
                    : ""
                  : ""
              }
              label="MANUAL"
              size="small"
              style={{ margin: "1px" }}
            />
            <Chip
              className={machineState === "3" ? "auto" : ""}
              label="AUTO"
              size="small"
              style={{ margin: "2px" }}
            />
          </StateContent>
        </CardComponentContent>

        {/* <CardComponentContent isData>
          {machineProduction.ciclo}
        </CardComponentContent> */}

        <CardComponentContent isData>
          <span>
            <strong>Data Inicial: </strong>
            {machineLatest.dataInicial &&
              dataBRFormatter(machineLatest.dataInicial)}
          </span>

          <span>
            <strong>Ciclo Atual: </strong>
            {machineLatest && machineLatest.ciclo}
          </span>

          <span>
            <strong>T.C: </strong>
            {machineLatest && machineLatest.tc}
          </span>

          <span>
            <strong>T.I: </strong>
            {machineLatest && machineLatest.td}
          </span>

          <span>
            <strong>T.D: </strong>
            {machineLatest && machineLatest.ti}
          </span>

          <span>
            <strong>Ciclos Acumulados: </strong>
            {machineLatest && machineLatest.tempoCicloAcumulado}
          </span>
        </CardComponentContent>

        <CardComponentContent isData={false}>
          <Button onClick={handleDelete}>
            <DeleteForeverIcon />
          </Button>

          <Button onClick={handleRefresh}>
            <RefreshIcon />
          </Button>

          <Button onClick={handleDetails}>
            <DoubleArrowIcon />
          </Button>
        </CardComponentContent>
      </CardComponent>
    </Container>
  );
};

export default CardMachine;
