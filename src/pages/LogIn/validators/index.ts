import * as yup from 'yup';

export const logInSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});