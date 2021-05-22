import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router";
import Button from "../../../../components/Button";
import LogoBox from "../../../../components/LogoBox";
import { useLoader } from "../../../../contexts/Loader";
import { useToast } from "../../../../contexts/Toast";
import {
  FormContainer,
  MuiCard,
  MuiContainer,
  MuiInput,
  MuiText,
} from "../../styles";
import { inputCodeSchema } from "../../validators/InputCode";

interface IFormData {
  sixDigitCode: string;
}

const InputCode = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(inputCodeSchema),
  });

  const { push } = useHistory();

  const { show, hide } = useLoader();

  const { addToast } = useToast();

  const handleNewPassword = handleSubmit(
    async ({ sixDigitCode }: IFormData) => {
      try {
        show("Loader");
        console.log({
          retrievePassword: `retrivePassword - ${sixDigitCode}`,
        });
        hide("Loader");
        push("/retrieve-password/new-password");
      } catch (error) {
        const fault = error as AxiosError;
        hide("Loader");
        addToast({
          title: "Login Error",
          description: `${fault.response?.data.message}`,
          type: "error",
        });
      }
    }
  );

  return (
    <MuiContainer>
      <LogoBox />

      <MuiCard>
        <MuiText>Verifique seu e-mail e insira o código enviado.</MuiText>
        <FormContainer onSubmit={handleNewPassword}>
          <Controller
            control={control}
            defaultValue=""
            name="sixDigitCode"
            render={({ field }) => (
              <MuiInput
                {...field}
                required
                label="código de seis digitos"
                variant="outlined"
                type="text"
                autoComplete="off"
                error={errors.sixDigitCode ? true : false}
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

export default InputCode;
