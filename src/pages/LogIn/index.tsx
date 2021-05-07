import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useLoader } from "../../contexts/Loader";
import {
  Card,
  FormContainer,
  Input,
  MuiButton,
  MuiContainer,
  MuiTypography,
} from "./styles";

const LogIn = () => {
  const { push } = useHistory();
  const { hide, show } = useLoader();

  const handleLogIn = () => {
    show("loader");
    push("/dashboard");
    hide("loader");
  };

  return (
    <MuiContainer>
      <Card>
        <MuiTypography variant="h3">LOGIN</MuiTypography>
        <MuiTypography variant="body1" gutterBottom>
          FORMULÁRIO LOGIN
        </MuiTypography>
        <FormContainer>
          <Input
            required
            id="email"
            label="e-mail"
            variant="outlined"
            type="email"
            autoComplete="off"
          />
          <Input
            required
            id="password"
            label="password"
            variant="outlined"
            type="password"
            autoComplete="off"
          />
        </FormContainer>

        <MuiButton onClick={handleLogIn}>Entrar</MuiButton>
      </Card>
      <Link to="/register/users">Cadastre-se</Link>
    </MuiContainer>
  );
};

export default LogIn;
