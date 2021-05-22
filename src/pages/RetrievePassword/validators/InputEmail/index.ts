import * as yup from 'yup';

export const retrievePasswordSchema = yup.object().shape({
  email: yup.string().required(),
});