import CardMachine from "../../components/CardMachine";
import { Item, MuiContainer, Title, TitleContainer } from "./styles";

const machines = [
  {
    id: 1,
    machine: "Máquina 1",
  },
  {
    id: 2,
    machine: "Máquina 2",
  },
  {
    id: 3,
    machine: "Máquina 3",
  },
];

const Dashboard = () => {
  return (
    <MuiContainer container>
      <TitleContainer item xs={12}>
        <Title variant="h3">Dashboard</Title>
      </TitleContainer>

      {machines.map((item) => (
        <Item item xs={4}>
          <CardMachine title={item.machine} key={item.id} />
        </Item>
      ))}
    </MuiContainer>
  );
};

export default Dashboard;
