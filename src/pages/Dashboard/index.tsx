import { useSubscription } from "mqtt-react-hooks";
import { useEffect, useState } from "react";
import { ButtonComponent } from "../../components/Button/styles";
import CardMachine from "../../components/CardMachine";
import { NewMachineModal } from "../../components/NewMachineModal";
import { useMachine } from "../../contexts/Machines";
import { Item, MuiContainer, Title, TitleContainer } from "./styles";

const Dashboard = () => {
  const { machines } = useMachine();

  const [isNewMachineModalOpen, setIsNewMachineModalOpen] = useState(false);

  const [messages, setMessages] = useState<any>([]);

  const { message } = useSubscription([
    "portal/6094c301bfe6e9001fda9f2a/0000001/latest",
    "portal/6094c301bfe6e9001fda9f2a/0000001/state",
    // "portal/6094c301bfe6e9001fda9f2a/0000001/production",
  ]);

  useEffect(() => {
    if (message) setMessages((msg: any) => [...msg, message]);
  }, [message]);

  function handleOpenNewMachineModal() {
    setIsNewMachineModalOpen(true);
  }

  function handleCloseNewMachineModal() {
    setIsNewMachineModalOpen(false);
  }

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
                  latestTopic={machine.urlConnectionLatest}
                  stateTopic={machine.urlConnectionState}
                  productionTopic={machine.urlConnectionProduction}
                  messages={messages}
                />
              </Item>
            );
          })}

        <ButtonComponent onClick={handleOpenNewMachineModal}>
          Adicionar Máquina
        </ButtonComponent>
        {/* <>
          <span>{JSON.stringify(messages)}</span>
        </> */}
      </MuiContainer>
      <NewMachineModal
        isOpen={isNewMachineModalOpen}
        onRequestClose={handleCloseNewMachineModal}
      />
    </>
  );
};

export default Dashboard;
