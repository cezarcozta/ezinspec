import { Chip } from "@material-ui/core";
import { IMessage } from "mqtt-react-hooks";
import React from "react";
import {
  CardComponent,
  CardComponentContent,
  CardComponentHeader,
  PowerContent,
  StateContent
} from "./styles";

type ICardMachine = {
  title: string;
  state?: string | undefined;
  messages?: IMessage | undefined;
  topic: string | string[];
  index: number;
};

const CardMachine: React.FC<ICardMachine> = ({
  title,
  state,
  messages,
  topic,
  index,
}) => {
  
  return (
    <CardComponent>
      <CardComponentHeader title={title + ` - ${String(index)}`} />

      <CardComponentContent>
        <PowerContent>
          <div className={state === "3" ? "on" : ""}>ON</div>
          <div className={state === "0" ? "off" : ""}>OFF</div>
        </PowerContent>
      </CardComponentContent>

      <CardComponentContent>
        <StateContent>
          <Chip
            className={state === "0" ? "on" : ""}
            label="PARADA"
            size="small"
            style={{ margin: "2px" }}
          />
          <Chip
            className={state !== "0" ? (state === "3" ? "" : "") : ""}
            label="MANUAL"
            size="small"
            style={{ margin: "1px" }}
          />
          <Chip
            className={state ? "on" : ""}
            label="AUTO"
            size="small"
            style={{ margin: "2px" }}
          />
        </StateContent>
      </CardComponentContent>

      <CardComponentContent>
        {messages?.topic === topic[0] ? messages?.message :  undefined}
      </CardComponentContent>
    </CardComponent>
  );
};

export default CardMachine;
