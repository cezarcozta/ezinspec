import { useState } from "react";
import { ButtonComponent } from "../../components/Button/styles";
import CardMachine from "../../components/CardMachine";
import { NewMachineModal } from "../../components/NewMachineModal";
import { useMachine } from "../../contexts/Machines";
import { Item, MuiContainer, Title, TitleContainer } from "./styles";

// enum state {
//   "AUTO",
//   "MANUAL",
//   "STOPPED",
// }

// const machinesMOCK = [
//   {
//     id: 1,
//     machine: "Máquina 1",
//     power: true,
//     state: state[1],
//   },
//   {
//     id: 2,
//     machine: "Máquina 2",
//     power: false,
//     state: state[2],
//   },
//   {
//     id: 3,
//     power: true,
//     machine: "Máquina 3",
//     state: state[3],
//   },
// ];

const Dashboard = () => {
  const { machines } = useMachine();
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
