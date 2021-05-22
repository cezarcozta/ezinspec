import CardMachine from "../../components/CardMachine";
import { MuiContainer, Title } from "./styles";

const Dashboard = () => {
  return (
    <MuiContainer>
      <Title variant="h3">Dashboard</Title>
      <CardMachine title="Máquina 1" />
    </MuiContainer>
  );
};

export default Dashboard;
