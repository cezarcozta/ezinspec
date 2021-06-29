import { Chip } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { IMessageStructure } from "mqtt-react-hooks";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useMachine } from "../../contexts/Machines";
import Button from "../Button";
import {
  CardComponent,
  CardComponentContent,
  CardComponentHeader,
  Container,
  PowerContent,
  StateContent,
} from "./styles";

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

  const [machineState, setMachineState] = useState<any>();
  const [machineLatest, setMachineLatest] = useState<any>();

  useEffect(() => {
    setMachineState(
      staticMessages &&
        staticMessages.find((msg) => msg.topic === stateTopic)?.message
    );

    setMachineLatest(
      messages.topic === latestTopic ? messages.message : "deu ruim"
    );
  }, [latestTopic, messages, stateTopic, staticMessages]);

  const handleDetails = () => {
    console.log({ id: id });
    push(`/machines/${id}`, {
      idMachine: id,
    });
  };

  const handleDelete = async () => {
    await deleteMachine(id);
  };
  return (
    <Container>
      <CardComponent>
        <CardComponentHeader title={title + ` - ${String(index)}`} />

        <CardComponentContent>
          <PowerContent>
            <div className={machineState === "3" ? "on" : ""}>ON</div>
            <div className={machineState === "0" ? "off" : ""}>OFF</div>
          </PowerContent>
        </CardComponentContent>

        <CardComponentContent>
          <StateContent>
            <Chip
              className={machineState === "0" ? "on" : ""}
              label="PARADA"
              size="small"
              style={{ margin: "2px" }}
            />
            <Chip
              className={
                machineState !== "0" ? (machineState === "3" ? "" : "") : ""
              }
              label="MANUAL"
              size="small"
              style={{ margin: "1px" }}
            />
            <Chip
              className={machineState === "3" ? "on" : ""}
              label="AUTO"
              size="small"
              style={{ margin: "2px" }}
            />
          </StateContent>
        </CardComponentContent>

        {/* <CardComponentContent>
        {messages && messages.find((msg) => msg.topic === stateTopic)?.message}
      </CardComponentContent> */}

        <CardComponentContent>
          {machineLatest && machineLatest}
        </CardComponentContent>

        <CardComponentContent>
          <Button onClick={handleDelete}>
            <DeleteForeverIcon />
          </Button>
          <Button
            onClick={() =>
              push(`/machines/${id}`, {
                idMachine: id,
              })
            }
          >
            <DoubleArrowIcon />
          </Button>
        </CardComponentContent>
      </CardComponent>
    </Container>
  );
};

export default CardMachine;
