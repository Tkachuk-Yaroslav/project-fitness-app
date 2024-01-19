import * as yup from 'yup';

const userFormSchema = yup.object().shape({
  name: yup.string().min(2).required(),
  email: yup.string().email(),
  height: yup.number().min(150).max(250).required(),
  currentWeight: yup.number().min(35).max(200).required(),
  desiredWeight: yup.number().min(35).max(150).required(),
  birthday: yup.date().required(),
  blood: yup
    .number()
    .oneOf([1, 2, 3, 4], 'Selecting the blood field is required')
    .required(),
  sex: yup
    .string()
    .oneOf(['male', 'female'], 'Selecting the blood field is required')
    .required(),
  levelActivity: yup
    .number()
    .oneOf([1, 2, 3, 4, 5], 'Selecting the level activity field is required')
    .required(),
});
export default userFormSchema;
