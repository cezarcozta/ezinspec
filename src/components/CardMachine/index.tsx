import { Chip, Typography } from "@material-ui/core";
import { useSubscription } from "mqtt-react-hooks";
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
  urlConnection: string;
};

const CardMachine: React.FC<ICardMachine> = ({
  title,
  isOn,
  state,
  urlConnection,
}) => {
  const date = new Date().toISOString();

  const dataSubscribe = useSubscription(urlConnection);
  console.log({
    subscribeData: dataSubscribe,
  });

  return (
    <CardComponent>
      <CardComponentHeader title={title} />

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
        <Typography>{dataSubscribe.connectionStatus.toString()}</Typography>
        <Typography>
          {dataSubscribe.message ? dataSubscribe.message?.message : null}
        </Typography>
        <Typography>
          {dataSubscribe.client ? dataSubscribe.client.connected : null}
        </Typography>
        <Typography>
          {dataSubscribe.topic ? dataSubscribe.topic : null}
        </Typography>
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
