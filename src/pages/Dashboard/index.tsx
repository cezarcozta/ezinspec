import { IMessage, useSubscription } from "mqtt-react-hooks";
import { useEffect, useState } from "react";
import { ButtonComponent } from "../../components/Button/styles";
import CardMachine from "../../components/CardMachine";
import { NewMachineModal } from "../../components/NewMachineModal";
import { useMachine } from "../../contexts/Machines";
import { Item, MuiContainer, Title, TitleContainer } from "./styles";

const Dashboard = () => {
  const { machines } = useMachine();

  const [isNewMachineModalOpen, setIsNewMachineModalOpen] = useState(false);

  const [latest, setLatest] = useState<any>([]);
  const [state, setState] = useState<string | IMessage | undefined>();

  // const machinesTopicLatest = machines.map(
  //   (machine) => machine.urlConnectionLatest
  // );
  // const machinesTopicState = machines.map(
  //   (machine) => machine.urlConnectionState
  // );

  // const LatestTopicStateTopic = machinesTopicLatest.concat(machinesTopicState);

  const { message, connectionStatus } = useSubscription(
    "portal/6094c301bfe6e9001fda9f2a/0000001/latest"
  );
  const dataSubscribeTestState = useSubscription(
    "portal/6094c301bfe6e9001fda9f2a/0000001/state"
  );

  useEffect(() => {
    if (message) setLatest((msgs: any) => [...msgs, message]);
  }, [message]);

  function handleOpenNewMachineModal() {
    setIsNewMachineModalOpen(true);
  }

  function handleCloseNewMachineModal() {
    setIsNewMachineModalOpen(false);
  }

  // console.log(dataSubscribe);

  return (
    <>
      <MuiContainer container>
        <TitleContainer item xs={12}>
          <Title variant="h3">Dashboard</Title>
        </TitleContainer>

        {machines &&
          machines.map((machine, index) => {
            return (
              <Item key={index} item xs={4}>
                <CardMachine
                  index={index}
                  title={machine.machineName}
                  key={machine._id}
                  latest={latest}
                  // state={state}
                  //subscribe={[dataSubscribeTestState]}
                />
              </Item>
            );
          })}

        <ButtonComponent onClick={handleOpenNewMachineModal}>
          Adicionar Máquina
        </ButtonComponent>

        <>
          <span>{connectionStatus}</span>
          <hr />
          <span>{JSON.stringify(latest)}</span>
        </>
      </MuiContainer>
      <NewMachineModal
        isOpen={isNewMachineModalOpen}
        onRequestClose={handleCloseNewMachineModal}
      />
    </>
  );
};

export default Dashboard;
