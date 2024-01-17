import * as yup from 'yup';

const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export const registerSchema = yup.object().shape({
  name: yup.string().required('Required'),
  email: yup.string().matches(emailPattern, 'Error email').required('Required'),
  password: yup
    .string()
    .min(6, 'Must be 6 or more characters')
    .required('Required'),
});
