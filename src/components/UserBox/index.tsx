import { useUser } from "../../contexts/User";
import { Company, Container, ImageProfile, ProfileAcess } from "./styles";

const UserBox = () => {
  const { user } = useUser();
  return (
    <Container>
      <ImageProfile />
      <Company>{user.type_business}</Company>
      <ProfileAcess>{user.level_subscriber}</ProfileAcess>
    </Container>
  );
};

export default UserBox;
