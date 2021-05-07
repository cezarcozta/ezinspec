import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useAuth } from "../../contexts/Auth";
import { useLoader } from "../../contexts/Loader";
import {
  Card,
  FormContainer,
  Input,
  MuiButton,
  MuiContainer,
  MuiTypography,
  SignUpLink
} from "./styles";
import { logInSchema } from "./validators";

interface IFormData {
  email: string;
  password: string;
}

const LogIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(logInSchema),
  });

  const { show, hide } = useLoader();

  const { signIn } = useAuth();

  const handleLogIn = handleSubmit(async ({ email, password }) => {
    show("Loader");
    await signIn({
      email,
      password,
    });
    hide("Loader");
  });

  return (
    <MuiContainer>
      <Card>
        <MuiTypography variant="h3">LOGIN</MuiTypography>
        <MuiTypography variant="body1" gutterBottom>
          FORMULÁRIO LOGIN
        </MuiTypography>
        <FormContainer onSubmit={handleLogIn}>
          <Controller
            control={control}
            defaultValue="cezarcozta@gmail.com"
            name="email"
            render={({ field }) => (
              <Input
                {...field}
                required
                label="e-mail"
                variant="outlined"
                type="email"
                autoComplete="off"
                error={errors.email ? true : false}
                size="small"
                fullWidth
              />
            )}
          />

          <Controller
            control={control}
            defaultValue="Test@123456"
            name="password"
            render={({ field }) => (
              <Input
                {...field}
                required
                id="password"
                label="senha"
                variant="outlined"
                type="password"
                autoComplete="off"
                error={errors.password ? true : false}
                size="small"
                fullWidth
              />
            )}
          />
        </FormContainer>

        <MuiButton onClick={handleLogIn}>Entrar</MuiButton>
        <SignUpLink to="/register/users">Cadastre-se</SignUpLink>
      </Card>
    </MuiContainer>
  );
};

export default LogIn;
