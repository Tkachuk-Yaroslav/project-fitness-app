import * as yup from "yup"

const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export const loginSchema = yup.object().shape({
  email: yup.string().matches(emailPattern, 'Error email. Example: test@gmail.com').required('Required'),
  password: yup
    .string()
    .min(6, 'Must be 6 or more characters')
    .required('Required'),
});