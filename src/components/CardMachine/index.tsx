import { Chip } from "@material-ui/core";
import { IMessageStructure } from "mqtt-react-hooks";
import React, { useEffect, useState } from "react";
import {
  CardComponent,
  CardComponentContent,
  CardComponentHeader,
  PowerContent,
  StateContent,
} from "./styles";

type ICardMachine = {
  title: string;
  messages: IMessageStructure;
  staticMessages: any[];
  latestTopic: string;
  stateTopic: string;
  productionTopic: string;
  index: number;
};

const CardMachine: React.FC<ICardMachine> = ({
  title,
  messages,
  staticMessages,
  latestTopic,
  stateTopic,
  productionTopic,
  index,
}) => {
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
  return (
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
            className={machineState ? "on" : ""}
            label="AUTO"
            size="small"
            style={{ margin: "2px" }}
          />
        </StateContent>
      </CardComponentContent>

      {/* <CardComponentContent>
        {messages && messages.find((msg) => msg.topic === stateTopic)?.message}
      </CardComponentContent> */}

      <CardComponentContent>{machineLatest}</CardComponentContent>

      {/* <CardComponentContent>
        {messages &&
          messages.find((msg) => msg.topic === productionTopic)?.message}
      </CardComponentContent> */}
    </CardComponent>
  );
};

export default CardMachine;
