import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router";
import Button from "../../components/Button";
import LogoBox from "../../components/LogoBox";
import { useLoader } from "../../contexts/Loader";
import { useToast } from "../../contexts/Toast";
import {
  FormContainer,
  MuiCard,
  MuiContainer,
  MuiInput,
  MuiText,
} from "./styles";
import { retrievePasswordSchema } from "./validators/InputEmail";

interface IFormData {
  email: string;
}

const RetrivievePassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(retrievePasswordSchema),
  });

  const { push } = useHistory();

  const { show, hide } = useLoader();

  const { addToast } = useToast();

  const handleNewPassword = handleSubmit(async ({ email }: IFormData) => {
    try {
      show("Loader");
      console.log({
        retrievePassword: `retrivePassword - ${email}`,
      });
      hide("Loader");
      push("/retrieve-password/code");
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
      <LogoBox />

      <MuiCard>
        <MuiText>Informe seu e-mail e te enviaremos um código</MuiText>
        <FormContainer onSubmit={handleNewPassword}>
          <Controller
            control={control}
            defaultValue=""
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

          <Button type="submit">Continuar</Button>
        </FormContainer>
      </MuiCard>
    </MuiContainer>
  );
};

export default RetrivievePassword;
