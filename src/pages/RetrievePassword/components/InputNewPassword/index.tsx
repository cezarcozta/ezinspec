import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import { Controller, useForm } from "react-hook-form";
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
import { inputNewPasswordSchema } from "../../validators/InputNewPassword";

interface IFormData {
  newPassword: string;
  confirmNewPassword: string;
}

const InputNewPassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(inputNewPasswordSchema),
  });

  const { show, hide } = useLoader();

  const { addToast } = useToast();

  const handleNewPassword = handleSubmit(
    async ({ newPassword, confirmNewPassword }: IFormData) => {
      try {
        show("Loader");
        console.log({
          retrievePassword: `retrivePassword - ${newPassword}${confirmNewPassword}`,
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
    }
  );

  return (
    <MuiContainer>
      <LogoBox />

      <MuiCard key={3}>
        <MuiText>Crie uma nova senha.</MuiText>
        <FormContainer onSubmit={handleNewPassword}>
          <Controller
            control={control}
            defaultValue=""
            name="newPassword"
            render={({ field }) => (
              <MuiInput
                {...field}
                required
                label="nova senha"
                variant="outlined"
                type="email"
                autoComplete="off"
                error={errors.newPassword ? true : false}
                size="small"
                fullWidth
              />
            )}
          />

          <Controller
            control={control}
            defaultValue=""
            name="confirmNewPassword"
            render={({ field }) => (
              <MuiInput
                {...field}
                required
                label="confirme a nova senha"
                variant="outlined"
                type="email"
                autoComplete="off"
                error={errors.confirmNewPassword ? true : false}
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

export default InputNewPassword;
