import { Company, Container, ImageProfile, ProfileAcess } from "./styles";

const UserBox = () => {
  return (
    <Container>
      <ImageProfile />
      <Company>Nome Empresa</Company>
      <ProfileAcess>PERFIL</ProfileAcess>
    </Container>
  );
};

export default UserBox;
