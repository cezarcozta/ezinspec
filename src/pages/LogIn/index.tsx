import { useHistory } from "react-router";
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

  const handleLoging = () => {
    push("/dashboard");
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

        <MuiButton onClick={handleLoging}>Entrar</MuiButton>
      </Card>
    </MuiContainer>
  );
};

export default LogIn;
