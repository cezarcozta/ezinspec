import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import { Controller, useForm } from "react-hook-form";
import Button from "../../components/Button";
import LogoBox from "../../components/LogoBox";
import { useAuth } from "../../contexts/Auth";
import { useLoader } from "../../contexts/Loader";
import { useToast } from "../../contexts/Toast";
import {
  ForgetPasswordLink,
  FormContainer,
  Main,
  MuiCard,
  MuiContainer,
  MuiInput,
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

  const handleLogIn = handleSubmit(async ({ email, password }: IFormData) => {
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
      <Main>
        <LogoBox />

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
            <Button type="submit">Entrar</Button>
          </FormContainer>

          <ForgetPasswordLink to="/retrive-password">
            Esqueceu sua senha?
          </ForgetPasswordLink>
        </MuiCard>
      </Main>
    </MuiContainer>
  );
};

export default LogIn;
