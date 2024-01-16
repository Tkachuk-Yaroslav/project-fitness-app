import { Formik } from 'formik';
import {
  ButtonSave,
  FormStyled,
  WrapperForBloodAndSex,
  WrapperRadio,
  WrapperUserForm,
} from './UserForm.styled';
import userFormSchema from './schemas/userFormSchema';
import CustomInput from './CustomInput';
import CustomRadio from './CustomRadio';
import { CustomLabelStyled, WrapperInput } from './CustomInput.styled';
// import Calendar from 'components/Calendar/Calendar';

const onSubmit = async (values, actions) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  actions.resetForm();
  console.log(values);
};
const UserForm = () => {
  return (
    <WrapperUserForm>
      <Formik
        initialValues={{
          name: '',
          email: '',
          height: '',
          currentWeight: '',
          desiredWeight: '',
          birthday: '',
          blood: '',
          sex: '',
          levelActivity: '',
        }}
        validationSchema={userFormSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <FormStyled autoComplete="off">
            <CustomInput label="Name" name="name" type="text" />
            <CustomInput
              disabled
              label="Email"
              name="email"
              type="email"
              placeholder="annarybachok@gmail.com"
            />
            <WrapperInput>
              <CustomInput
                className="input-form"
                label="Height"
                name="height"
                type="number"
              />
              <CustomInput
                className="input-form"
                label="Current Weight"
                name="currentWeight"
                type="number"
              />
              <CustomInput
                className="input-form"
                label="Desired Weight"
                name="desiredWeight"
                type="number"
              />
              {/* <Calendar /> */}
              <CustomInput
                className="input-form"
                label="Date of birth"
                name="birthday"
                type="date"
              />
            </WrapperInput>
            <WrapperRadio>
              <div id="radio-blood">
                <CustomLabelStyled>Blood</CustomLabelStyled>
                <WrapperForBloodAndSex
                  role="group"
                  aria-labelledby="radio-blood"
                >
                  <CustomRadio
                    className="styled-radio"
                    label="1"
                    type="radio"
                    name="blood"
                    value="1"
                  ></CustomRadio>
                  <CustomRadio
                    label="2"
                    type="radio"
                    name="blood"
                    value="2"
                  ></CustomRadio>
                  <CustomRadio
                    label="3"
                    type="radio"
                    name="blood"
                    value="3"
                  ></CustomRadio>
                  <CustomRadio
                    label="4"
                    type="radio"
                    name="blood"
                    value="4"
                  ></CustomRadio>
                </WrapperForBloodAndSex>
              </div>
              <div id="radio-sex">
                <WrapperForBloodAndSex role="group" aria-labelledby="radio-sex">
                  <CustomRadio
                    label="Male"
                    type="radio"
                    name="sex"
                    value="Male"
                  ></CustomRadio>
                  <CustomRadio
                    label="Female"
                    type="radio"
                    name="sex"
                    value="Female"
                  ></CustomRadio>
                </WrapperForBloodAndSex>
              </div>
            </WrapperRadio>
            <div id="radio-level-activity"></div>
            <div
              role="group"
              aria-labelledby="radio-level-activity"
              style={{ marginBottom: 30 }}
            >
              <CustomRadio
                label="Sedentary lifestyle (little or no physical activity)"
                type="radio"
                name="levelActivity"
                value="1"
              ></CustomRadio>
              <CustomRadio
                label="Light activity (light exercises/sports 1-3 days per week)"
                type="radio"
                name="levelActivity"
                value="2"
              ></CustomRadio>
              <CustomRadio
                label="Moderately active (moderate exercises/sports 3-5 days per week)"
                type="radio"
                name="levelActivity"
                value="3"
              ></CustomRadio>
              <CustomRadio
                label="Very active (intense exercises/sports 6-7 days per week)"
                type="radio"
                name="levelActivity"
                value="4"
              ></CustomRadio>
              <CustomRadio
                label="Extremely active (very strenuous exercises/sports and physical work)"
                type="radio"
                name="levelActivity"
                value="5"
              ></CustomRadio>
            </div>
            <ButtonSave disabled={isSubmitting} type="submit">
              Save
            </ButtonSave>
          </FormStyled>
        )}
      </Formik>
    </WrapperUserForm>
  );
};
export default UserForm;
