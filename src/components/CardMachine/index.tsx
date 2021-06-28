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
  messages: any[];
  latestTopic: string;
  stateTopic: string;
  productionTopic: string;
  index: number;
};

const CardMachine: React.FC<ICardMachine> = ({
  title,
  messages,
  latestTopic,
  stateTopic,
  productionTopic,
  index,
}) => {
  const state = messages.find((msg) => msg.topic === stateTopic)?.message;
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
        {messages && messages.find((msg) => msg.topic === stateTopic)?.message}
      </CardComponentContent>

      <CardComponentContent>
        {messages && messages.find((msg) => msg.topic === latestTopic)?.message}
      </CardComponentContent>

      {/* <CardComponentContent>
        {messages &&
          messages.find((msg) => msg.topic === productionTopic)?.message}
      </CardComponentContent> */}
    </CardComponent>
  );
};

export default CardMachine;
