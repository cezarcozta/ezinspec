import * as yup from 'yup';

export const inputCodeSchema = yup.object().shape({
  sixDigitCode: yup.string().required().length(6),
});