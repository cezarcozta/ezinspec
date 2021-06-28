import React from "react";
import {
  CardComponent,
  CardComponentContent,
  CardComponentHeader,
} from "./styles";

type ICardMachine = {
  title: string;
  // state: string | IMessage | undefined;
  latest: string | undefined;
  // subscribe: IUseSubscription[];
  index: number;
};

const CardMachine: React.FC<ICardMachine> = ({
  title,
  // state,
  latest,
  // subscribe,
  index,
}) => {
  console.log(latest);
  return (
    <CardComponent>
      <CardComponentHeader title={title + ` - ${String(index)}`} />

      {/* <CardComponentContent>
        <PowerContent>
          <div className={subscribe[1].message?.message === "3" ? "on" : ""}>
            ON
          </div>
          <div className={subscribe[1].message?.message === "0" ? "off" : ""}>
            OFF
          </div>
        </PowerContent>
      </CardComponentContent>

      <CardComponentContent>
        <StateContent>
          <Chip
            className={subscribe[1].message?.message === "0" ? "on" : ""}
            label="PARADA"
            size="small"
            style={{ margin: "2px" }}
          />
          <Chip
            className={
              subscribe[1].message?.message !== "0"
                ? subscribe[1].message?.message === "3"
                  ? ""
                  : ""
                : ""
            }
            label="MANUAL"
            size="small"
            style={{ margin: "1px" }}
          />
          <Chip
            className={subscribe[1].message?.message ? "on" : ""}
            label="AUTO"
            size="small"
            style={{ margin: "2px" }}
          />
        </StateContent>
      </CardComponentContent> */}

      <CardComponentContent>{latest && latest}</CardComponentContent>
    </CardComponent>
  );
};

export default CardMachine;
