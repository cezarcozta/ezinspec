import { useEffect } from "react";
import CardMachine from "../../components/CardMachine";
import { api } from "../../services/api";
import { Item, MuiContainer, Title, TitleContainer } from "./styles";

interface IUser {
  level_subscriber: string;
  state: string;
  type: string;
  _id: string;
  name: string;
  email: string;
  type_business: string;
  city: string;
  province: string;
  phone: number;
  createdAt: Date;
  updatedAt: Date;
}

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
  useEffect(() => {
    async function loadUser() {
      try {
        const { data } = await api.get<IUser>("/users/profile");
        console.log({ user: data });
      } catch (error) {
        console.log(error);
      }
    }

    loadUser();
  });
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
