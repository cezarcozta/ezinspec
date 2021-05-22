import { Chip, Switch } from "@material-ui/core";
import React from "react";
import {
  CardComponent,
  CardComponentContent,
  CardComponentHeader,
  PowerContent,
  StateContent,
  Text,
  TimeContent,
} from "./styles";

type ICardMachine = {
  title: string;
};

const CardMachine: React.FC<ICardMachine> = ({ title }) => {
  const date = new Date().toISOString();
  return (
    <CardComponent>
      <CardComponentHeader title={title} />

      <CardComponentContent>
        <PowerContent>
          <Text variant="subtitle2">OFF</Text>
          <Switch />
          <Text variant="subtitle2">ON</Text>
        </PowerContent>
      </CardComponentContent>

      <CardComponentContent>
        <StateContent>
          <Chip label="PARADA" size="small" style={{ margin: "2px" }} />
          <Chip label="MANUAL" size="small" style={{ margin: "1px" }} />
          <Chip label="AUTO" size="small" style={{ margin: "2px" }} />
        </StateContent>
      </CardComponentContent>

      <CardComponentContent>
        <TimeContent>
          <Chip label={date} style={{ margin: "2px" }} />
          <Chip label={"Ultimo Ciclo"} style={{ margin: "2px" }} />
          <Chip label={"Ciclos até o momento"} style={{ margin: "2px" }} />
        </TimeContent>
      </CardComponentContent>
    </CardComponent>
  );
};

export default CardMachine;
