import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  name: yup.number().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  passwordConfirm: yup.string().required(),
  typeBusiness: yup.string().required().nullable(),
  cep: yup.string().required().nullable(),
  province: yup.string().required().nullable(),
  city: yup.string().required().nullable(),
  phone: yup.string().required().nullable(),
});