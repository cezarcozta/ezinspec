import { yupResolver } from "@hookform/resolvers/yup";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useLoader } from "../../contexts/Loader";
import { api } from "../../services/api";
import {
  Card,
  FormContainer,
  Input,
  MuiButton,
  MuiContainer,
  MuiTypography,
} from "./styles";
import { signUpSchema } from "./validators";

interface ICep {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

interface IBussiness {
  _id: string;
  bussiness: string;
}

interface IFormData {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  typeBusiness: IBussiness;
  cep: string;
  city: string;
  province: string;
  phone: string;
}

const SignUp = () => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(signUpSchema),
  });

  const { push } = useHistory();
  const { hide, show } = useLoader();

  const [uf, setUf] = useState("");
  const [city, setCity] = useState("");
  const [adress, setAdress] = useState("");

  const handleCep = async () => {
    try {
      const { data } = await api.get(
        `https://viacep.com.br/ws/${getValues("cep")}/json`
      );

      setUf(data.uf);
      setCity(data.localidade);
      setAdress(data.logradouro);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = handleSubmit(
    async ({
      email,
      password,
      city,
      name,
      passwordConfirm,
      phone,
      province,
      typeBusiness,
    }) => {
      show("loader");
      await api.post("/register/users", {
        email,
        password,
        city,
        name,
        passwordConfirm,
        phone,
        province,
        typeBusiness,
      });
      push("/signUp");
      hide("loader");
    }
  );

  return (
    <MuiContainer>
      <Card>
        <MuiTypography variant="h3">SignUp</MuiTypography>
        <button onClick={() => push("/")}>Voltar</button>
        <MuiTypography variant="body1" gutterBottom>
          FORMULÁRIO SignUp
        </MuiTypography>

        <FormContainer onSubmit={handleSignUp}>
          <Grid container direction="column">
            <Controller
              control={control}
              defaultValue=""
              name="name"
              render={({ field }) => (
                <Input
                  {...field}
                  required
                  label="nome"
                  variant="outlined"
                  type="text"
                  autoComplete="off"
                  error={errors.name ? true : false}
                  size="small"
                  fullWidth
                />
              )}
            />

            <Controller
              control={control}
              defaultValue=""
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
              defaultValue=""
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

            <Controller
              control={control}
              defaultValue=""
              name="passwordConfirm"
              render={({ field }) => (
                <Input
                  {...field}
                  required
                  id="passwordConfirmation"
                  label="confirme a senha"
                  variant="outlined"
                  type="password"
                  autoComplete="off"
                  error={errors.passwordConfirm ? true : false}
                  size="small"
                  fullWidth
                />
              )}
            />

            <Controller
              control={control}
              defaultValue=""
              name="typeBusiness"
              render={({ field }) => (
                <Input
                  {...field}
                  id="typeBusiness"
                  label="area de atuação da empresa"
                  variant="outlined"
                  type="text"
                  autoComplete="off"
                  error={errors.typeBusiness ? true : false}
                  size="small"
                  fullWidth
                />
              )}
            />

            <Controller
              control={control}
              defaultValue=""
              name="cep"
              render={({ field }) => (
                <Input
                  {...field}
                  required
                  id="cep"
                  label="cep"
                  variant="outlined"
                  type="text"
                  autoComplete="off"
                  error={errors.cep ? true : false}
                  size="small"
                  fullWidth
                />
              )}
            />

            <button onClick={() => handleCep()}>Click</button>

            <Controller
              control={control}
              defaultValue=""
              name="province"
              render={({ field }) => (
                <Input
                  {...field}
                  value={uf}
                  id="uf"
                  label="estado"
                  variant="outlined"
                  type="text"
                  autoComplete="off"
                  error={errors.province ? true : false}
                  size="small"
                  fullWidth
                />
              )}
            />

            <Controller
              control={control}
              defaultValue=""
              name="city"
              render={({ field }) => (
                <Input
                  {...field}
                  value={city}
                  id="city"
                  label="cidade"
                  variant="outlined"
                  type="text"
                  autoComplete="off"
                  error={errors.city ? true : false}
                  size="small"
                  fullWidth
                />
              )}
            />

            <Controller
              control={control}
              defaultValue=""
              name="phone"
              render={({ field }) => (
                <Input
                  {...field}
                  label="telefone"
                  variant="outlined"
                  type="phone"
                  autoComplete="off"
                  error={errors.phone ? true : false}
                  size="small"
                  fullWidth
                />
              )}
            />
          </Grid>
        </FormContainer>

        <MuiButton type="submit">Cadastrar</MuiButton>
      </Card>
    </MuiContainer>
  );
};

export default SignUp;
