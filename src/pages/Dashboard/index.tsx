import CardMachine from "../../components/CardMachine";
import { Item, MuiContainer, Title, TitleContainer } from "./styles";

enum state {
  "AUTO",
  "MANUAL",
  "STOPPED",
}

const machines = [
  {
    id: 1,
    machine: "Máquina 1",
    power: true,
    state: state[1],
  },
  {
    id: 2,
    machine: "Máquina 2",
    power: false,
    state: state[2],
  },
  {
    id: 3,
    power: true,
    machine: "Máquina 3",
    state: state[3],
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
          <CardMachine
            title={item.machine}
            key={item.id}
            isOn={item.power}
            state={
              item.state !== "AUTO"
                ? item.state === "MANUAL"
                  ? "MANUAL"
                  : "STOPPED"
                : "AUTO"
            }
          />
        </Item>
      ))}
    </MuiContainer>
  );
};

export default Dashboard;
