import * as yup from 'yup';

const userFormSchema = yup.object().shape({
  name: yup.string().min(2).required(),
  email: yup.string().email(),
  height: yup.number().min(150).required(),
  currentWeight: yup.number().min(35).required(),
  desiredWeight: yup.number().min(35).required(),
  birthday: yup.date().required(),
  bood: yup
    .number()
    .oneOf([1, 2, 3, 4], 'Selecting the blood field is required')
    .required(),
  sex: yup
    .string()
    .oneOf(['Male', 'Female'], 'Selecting the blood field is required')
    .required(),
  levelActivity: yup
    .number()
    .oneOf([1, 2, 3, 4, 5], 'Selecting the level activity field is required')
    .required(),
});
export default userFormSchema;
