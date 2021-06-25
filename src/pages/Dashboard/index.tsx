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

  const [latest, setLatest] = useState<IMessage | undefined>();
  const [machineState, setMachineState] = useState<IMessage | undefined>();

  const dataSubscribe = useSubscription(
    machines.map((machine) => machine.urlConnectionState)
  );

  console.log({
    dataSubscribe: dataSubscribe,
  })

  useEffect(() => {
    if (dataSubscribe.message)
      setMachineState(dataSubscribe.message);
  }, [dataSubscribe.message]);

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
                  state={machineState?.message?.toString()}
                  messages={machineState}
                  topic={[machine.urlConnectionLatest, machine.urlConnectionState]}
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
