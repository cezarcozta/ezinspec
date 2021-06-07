import { IMessage, useSubscription } from "mqtt-react-hooks";
import { useEffect, useState } from "react";
import { ButtonComponent } from "../../components/Button/styles";
import CardMachine from "../../components/CardMachine";
import { NewMachineModal } from "../../components/NewMachineModal";
import { useMachine } from "../../contexts/Machines";
import { Item, MuiContainer, Title, TitleContainer } from "./styles";
const Dashboard = () => {
  const { machines } = useMachine();

  const [messages, setMessages] = useState<IMessage[]>([]);

  const dataSubscribe = useSubscription(
    machines.map((machine) => machine.urlConnection)
  );

  useEffect(() => {
    if (dataSubscribe.message)
      setMessages((msgs: any) => [...msgs, dataSubscribe.message]);
  }, [dataSubscribe.message]);

  const [isNewMachineModalOpen, setIsNewMachineModalOpen] = useState(false);

  function handleOpenNewMachineModal() {
    setIsNewMachineModalOpen(true);
  }

  function handleCloseNewMachineModal() {
    setIsNewMachineModalOpen(false);
  }

  console.log({ machines: machines });

  console.log({
    subscribeData: dataSubscribe,
  });

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
                  isOn={true}
                  state={"AUTO"}
                  messages={messages}
                  topic={machine.urlConnection}
                />
              </Item>
            );
          })}

        <ButtonComponent onClick={handleOpenNewMachineModal}>
          Adicionar Máquina
        </ButtonComponent>
      </MuiContainer>
      <NewMachineModal
        isOpen={isNewMachineModalOpen}
        onRequestClose={handleCloseNewMachineModal}
      />
    </>
  );
};

export default Dashboard;
