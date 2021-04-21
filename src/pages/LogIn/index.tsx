import { Button, Container, Typography } from "@material-ui/core";
import { useHistory } from "react-router";

const LogIn = () => {
  const { push } = useHistory();

  const handleLoging = () => {
    push("/home");
  };

  return (
    <Container>
      <Typography variant="h3">LOGIN</Typography>
      <Typography variant="body1" gutterBottom>
        FORMULÁRIO LOGIN
      </Typography>

      <Button onClick={handleLoging}>LogIn</Button>
    </Container>
  );
};

export default LogIn;
