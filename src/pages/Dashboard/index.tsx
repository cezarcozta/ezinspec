import AddBoxIcon from "@material-ui/icons/AddBox";
import { useState } from "react";
import { ButtonComponent } from "../../components/Button/styles";
import CardMachine from "../../components/CardMachine";
import { NewMachineModal } from "../../components/NewMachineModal";
import { useMachine } from "../../contexts/Machines";
import { Item, MuiContainer, Title, TitleContainer } from "./styles";

const Dashboard = () => {
  const { machines, messages, staticMessages } = useMachine();

  const [isNewMachineModalOpen, setIsNewMachineModalOpen] = useState(false);

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
                  id={machine._id}
                  index={index}
                  title={machine.machineName}
                  key={machine._id}
                  latestTopic={machine.urlConnectionLatest}
                  stateTopic={machine.urlConnectionState}
                  productionTopic={machine.urlConnectionProduction}
                  messages={messages}
                  staticMessages={staticMessages}
                />
              </Item>
            );
          })}

        {/* <>
          <span>{JSON.stringify(messages)}</span>
        </> */}
      </MuiContainer>
      <ButtonComponent type="button" onClick={handleOpenNewMachineModal}>
        <AddBoxIcon />
      </ButtonComponent>
      <NewMachineModal
        isOpen={isNewMachineModalOpen}
        onRequestClose={handleCloseNewMachineModal}
      />
    </>
  );
};

export default Dashboard;
