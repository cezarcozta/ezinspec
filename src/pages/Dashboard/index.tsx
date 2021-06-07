import { useState } from "react";
import { ButtonComponent } from "../../components/Button/styles";
import CardMachine from "../../components/CardMachine";
import { NewMachineModal } from "../../components/NewMachineModal";
import { useMachine } from "../../contexts/Machines";
import { Item, MuiContainer, Title, TitleContainer } from "./styles";

const Dashboard = () => {
  const { machines } = useMachine();

  console.log({ machines: machines });

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
          machines.map((item) => (
            <Item item xs={4}>
              <CardMachine
                title={item.machineName}
                key={item._id}
                isOn={true}
                state={"AUTO"}
                urlConnection={item.urlConnection}
              />
            </Item>
          ))}

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
