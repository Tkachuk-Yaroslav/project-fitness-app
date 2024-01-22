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
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { refreshThunk, setProfileSettingsThunk } from '../../redux/auth/thunks';
import Calendar from 'components/Calendar/Calendar';

const UserForm = () => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [userData, setUser] = useState({
    ...user,
    blood: String(user.blood),
    levelActivity: String(user.levelActivity),
  });

  const onSubmit = async (values, actions) => {
    const { email, ...rest } = values;
    const { payload } = await dispatch(setProfileSettingsThunk(rest));
    dispatch(refreshThunk());
    setUser(payload);
  };

  const {
    name,
    email,
    height,
    currentWeight,
    desiredWeight,
    birthday,
    blood,
    sex,
    levelActivity,
  } = userData;

  return (
    <WrapperUserForm>
      <Formik
        initialValues={{
          name,
          email,
          height: height ? height : 0,
          currentWeight: currentWeight ? currentWeight : 0,
          desiredWeight: desiredWeight ? desiredWeight : 0,
          birthday: birthday ? birthday : new Date(),
          blood: blood ? blood : '',
          sex: sex ? sex : '',
          levelActivity: levelActivity ? levelActivity : '',
        }}
        validationSchema={userFormSchema}
        onSubmit={onSubmit}
      >
        {({ values }) => (
          <FormStyled autoComplete="off">
            <CustomInput label="Name" name="name" type="text" />
            <CustomInput
              className="disabled"
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
              <Calendar name="birthday" />
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
                    value="male"
                  ></CustomRadio>
                  <CustomRadio
                    label="Female"
                    type="radio"
                    name="sex"
                    value="female"
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
            <ButtonSave
              disabled={
                JSON.stringify({
                  name,
                  email,
                  height,
                  currentWeight,
                  desiredWeight,
                  birthday: new Date(birthday),
                  blood: String(blood),
                  sex,
                  levelActivity: String(levelActivity),
                }) === JSON.stringify(values)
              }
              type="submit"
            >
              Save
            </ButtonSave>
          </FormStyled>
        )}
      </Formik>
    </WrapperUserForm>
  );
};
export default UserForm;
