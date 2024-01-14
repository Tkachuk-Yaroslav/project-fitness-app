import * as yup from 'yup';

const userFormSchema = yup.object().shape({
  name: yup.string().min(2).required(),
  email: yup.string().email(),
  height: yup.number().min(150).required(),
  currentWeight: yup.number().min(35).required(),
  desiredWeight: yup.number().min(35).required(),
  birthday: yup.date().required(),
});
export default userFormSchema;
