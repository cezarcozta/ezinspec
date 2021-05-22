import * as yup from 'yup';

export const inputNewPasswordSchema = yup.object().shape({
  newPassword: yup.string().required(), // colocar a validação condicional!!!
  confirmNewPassword: yup.string().required(),
});