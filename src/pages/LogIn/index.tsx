import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import { Controller, useForm } from "react-hook-form";
import { useAuth } from "../../contexts/Auth";
import { useLoader } from "../../contexts/Loader";
import { useToast } from "../../contexts/Toast";
import {
  ButtonText,
  ForgetPasswordLink,
  FormContainer,
  H1Header,
  H2Header,
  Header,
  Main,
  MuiButton,
  MuiCard,
  MuiContainer,
  MuiInput,
  SignUpLink,
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

  const { addToast } = useToast();

  const handleLogIn = handleSubmit(async ({ email, password }) => {
    try {
      show("Loader");
      await signIn({
        email,
        password,
      });
      hide("Loader");
    } catch (error) {
      const fault = error as AxiosError;
      hide("Loader");
      addToast({
        title: "Login Error",
        description: `${fault.response?.data.message}`,
        type: "error",
      });
    }
  });

  return (
    <MuiContainer>
      <Header>
        <H1Header>MONITORA</H1Header>
        <H2Header>FÁCIL</H2Header>
      </Header>

      <Main>
        <MuiCard>
          <FormContainer onSubmit={handleLogIn}>
            <Controller
              control={control}
              defaultValue="cezarcozta@gmail.com"
              name="email"
              render={({ field }) => (
                <MuiInput
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
                <MuiInput
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

          <MuiButton onClick={handleLogIn}>
            <ButtonText>Entrar</ButtonText>
          </MuiButton>

          <ForgetPasswordLink to="/retrive-password">
            Esqueceu sua senha?
          </ForgetPasswordLink>
          <SignUpLink to="/register/users">Crie sua conta</SignUpLink>
        </MuiCard>
      </Main>
    </MuiContainer>
  );
};

export default LogIn;
