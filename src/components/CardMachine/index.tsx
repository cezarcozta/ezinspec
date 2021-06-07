import { Chip } from "@material-ui/core";
import { IMessage } from "mqtt-react-hooks";
import React from "react";
import {
  CardComponent,
  CardComponentContent,
  CardComponentHeader,
  PowerContent,
  StateContent,
} from "./styles";

type ICardMachine = {
  title: string;
  isOn?: boolean;
  state?: "AUTO" | "MANUAL" | "STOPPED";
  messages?: IMessage[];
  topic: string | string[];
  index: number;
};

const CardMachine: React.FC<ICardMachine> = ({
  title,
  isOn,
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
          <div className={isOn ? "on" : ""}>ON</div>
          <div className={isOn ? "" : "off"}>OFF</div>
        </PowerContent>
      </CardComponentContent>

      <CardComponentContent>
        <StateContent>
          <Chip
            className={state ? "on" : ""}
            label="PARADA"
            size="small"
            style={{ margin: "2px" }}
          />
          <Chip
            className={state !== "AUTO" ? (state === "MANUAL" ? "" : "") : ""}
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
        {messages?.find((item) => item.topic === topic)?.message?.toString()}
        {/* <Typography>{dataSubscribe.connectionStatus.toString()}</Typography>
        <Typography>
          {dataSubscribe.message ? dataSubscribe.message?.message : null}
        </Typography>
        <Typography>
          {dataSubscribe.client ? dataSubscribe.client.connected : null}
        </Typography>
        <Grid item>{dataSubscribe.topic ? dataSubscribe.topic : null}</Grid> */}
        {/* <TimeContent>
          <Chip label={date} style={{ margin: "2px" }} />
          <Chip label={"Ultimo Ciclo"} style={{ margin: "2px" }} />
          <Chip label={"Ciclos até o momento"} style={{ margin: "2px" }} />
        </TimeContent> */}
      </CardComponentContent>
    </CardComponent>
  );
};

export default CardMachine;
