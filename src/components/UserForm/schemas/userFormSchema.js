import * as yup from 'yup';

const userFormSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name must be min 2 characters long')
    .required('Required'),
  height: yup
    .number()
    .min(150, 'Min height must be 150 cm')
    .max(250, 'Min height must be 250 cm')
    .required('Required'),
  currentWeight: yup
    .number()
    .min(35, 'Min weight must be 35 kg')
    .max(200, 'Max weight must be 200 kg')
    .required('Required'),
  desiredWeight: yup
    .number()
    .min(35, 'Min weight must be 35 kg')
    .max(150, 'Min weight must be 150 kg')
    .required('Required'),
  birthday: yup.date().required('Required'),
  blood: yup
    .number()
    .oneOf([1, 2, 3, 4], 'Selecting the blood field is required')
    .required('Required'),
  sex: yup
    .string()
    .oneOf(['male', 'female'], 'Selecting the blood field is required')
    .required('Required'),
  levelActivity: yup
    .number()
    .oneOf([1, 2, 3, 4, 5], 'Selecting the level activity field is required')
    .required('Required'),
});
export default userFormSchema;
