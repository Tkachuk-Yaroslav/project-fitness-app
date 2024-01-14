import { Formik, Field, Form, useFormik, validateYupSchema } from 'formik';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { WrapperUserForm } from './UserForm.styled';
import userFormSchema from './schemas/userFormSchema';
import CustomInput from './CustomInput';
import CustomRadio from './CustomRadio';

const onSubmit = async (values, actions) => {
  console.log(values);
  await new Promise(resolve => setTimeout(resolve, 1000));
  actions.resetForm();
};
const UserForm = () => {
  //   const {
  //     values,
  //     errors,
  //     touched,
  //     isSubmitting,
  //     handleBlur,
  //     handleChange,
  //     handleSubmit,
  //   } = useFormik({
  //     initialValues: {
  //       name: '',
  //       email: '',
  //       height: '',
  //       currentWeight: '',
  //       desiredWeight: '',
  //       birthday: '',
  //     },
  //     validationSchema: userFormSchema,
  //     onSubmit,
  //   });
  //   console.log(errors.name);
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
        }}
        validationSchema={userFormSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="name"
              name="name"
              type="text"
              placeholder="Enter your name"
            ></CustomInput>
            <CustomInput
              label="email"
              name="email"
              type="email"
              placeholder="Enter your email"
            ></CustomInput>
            <CustomInput
              label="height"
              name="height"
              type="number"
              placeholder="Enter your height"
            ></CustomInput>
            <CustomInput
              label="currentWeight"
              name="currentWeight"
              type="number"
              placeholder="Enter your current weight"
            ></CustomInput>
            <CustomInput
              label="desiredWeight"
              name="desiredWeight"
              type="number"
              placeholder="Enter your desired weight"
            ></CustomInput>
            <CustomInput
              label="birthday"
              name="birthday"
              type="date"
            ></CustomInput>
            <CustomRadio label="1" type="radio" name="blood"></CustomRadio>
            <button disabled={isSubmitting} type="submit">
              Save
            </button>
          </Form>
        )}
      </Formik>
      {/* <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="name">Name</label>
        <input
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          id="name"
          type="name"
          style={
            errors.name && touched.name
              ? { borderColor: 'red' }
              : { borderColor: 'green' }
          }
        />
        {errors.name && touched.name ? (
          <p style={{ color: 'red' }}>Error name</p>
        ) : (
          <p style={{ color: 'green' }}>Success name</p>
        )}
        <label htmlFor="email">Email</label>
        <input
          value={values.email}
          onChange={handleChange}
          id="email"
          type="email"
          style={
            errors.email && touched.email
              ? { borderColor: 'red' }
              : { borderColor: 'green' }
          }
        />
        {errors.email && touched.email ? (
          <p style={{ color: 'red' }}>Error email</p>
        ) : (
          <p style={{ color: 'green' }}>Success email</p>
        )}

        <label htmlFor="height">Height</label>
        <input
          value={values.height}
          onChange={handleChange}
          id="height"
          type="number"
          style={
            errors.height && touched.height
              ? { borderColor: 'red' }
              : { borderColor: 'green' }
          }
        />
        {errors.height && touched.height ? (
          <p style={{ color: 'red' }}>Error height</p>
        ) : (
          <p style={{ color: 'green' }}>Success height</p>
        )}

        <label htmlFor="currentWeight">Current Weight</label>
        <input
          value={values.currentWeight}
          onChange={handleChange}
          id="currentWeight"
          type="number"
          style={
            errors.currentWeight && touched.currentWeight
              ? { borderColor: 'red' }
              : { borderColor: 'green' }
          }
        />
        {errors.currentWeight && touched.currentWeight ? (
          <p style={{ color: 'red' }}>Error Current Weight</p>
        ) : (
          <p style={{ color: 'green' }}>Success Current Weight</p>
        )}

        <label htmlFor="desiredWeight">Desired Weight</label>
        <input
          value={values.desiredWeight}
          onChange={handleChange}
          id="desiredWeight"
          type="number"
          style={
            errors.desiredWeight && touched.desiredWeight
              ? { borderColor: 'red' }
              : { borderColor: 'green' }
          }
        />
        {errors.desiredWeight && touched.desiredWeight ? (
          <p style={{ color: 'red' }}>Error Desired Weight</p>
        ) : (
          <p style={{ color: 'green' }}>Success Desired Weight</p>
        )}

        <label htmlFor="birthday">Date of birth</label>
        <input
          value={values.birthday}
          onChange={handleChange}
          id="birthday"
          type="date"
          style={
            errors.birthday && touched.birthday
              ? { borderColor: 'red' }
              : { borderColor: 'green' }
          }
        />
        {errors.birthday && touched.birthday ? (
          <p style={{ color: 'red' }}>Error Date of birth</p>
        ) : (
          <p style={{ color: 'green' }}>Success Date of birth</p>
        )}

        <button disabled={isSubmitting} type="submit">
          Save
        </button>
      </form> */}

      {/* <Formik
        initialValues={{
          picked: '',
        }}
      >
        {({ values }) => (
          <Form>
            <div id="my-radio-group">Blood</div>
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="picked" value="1" />1
              </label>
              <label>
                <Field type="radio" name="picked" value="2" />2
              </label>
              <label>
                <Field type="radio" name="picked" value="3" />3
              </label>
              <label>
                <Field type="radio" name="picked" value="4" />4
              </label>
            </div>
          </Form>
        )}
      </Formik>
      <Formik
        initialValues={{
          picked: '',
        }}
      >
        {({ values }) => (
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              name="picked"
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel
              name="picked"
              value="male"
              control={<Radio />}
              label="Male"
            />
          </RadioGroup>
          // <Form>
          //   <div role="group" aria-labelledby="my-radio-group">
          //     <label>
          //       <Field type="radio" name="picked" value="male" />
          //       Male
          //     </label>
          //     <label>
          //       <Field type="radio" name="picked" value="Female" />
          //       Female
          //     </label>
          //   </div>
          // </Form>
        )}
      </Formik>
      <Formik
        initialValues={{
          picked: '',
        }}
      >
        {({ values }) => (
          <Form>
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="picked" value="1" />
                Sedentary lifestyle (little or no physical activity)
              </label>
              <label>
                <Field type="radio" name="picked" value="2" />
                Light activity (light exercises/sports 1-3 days per week)
              </label>
              <label>
                <Field type="radio" name="picked" value="3" />
                Moderately active (moderate exercises/sports 3-5 days per week)
              </label>
              <label>
                <Field type="radio" name="picked" value="4" />
                Very active (intense exercises/sports 6-7 days per week)
              </label>
              <label>
                <Field type="radio" name="picked" value="4" />
                Extremely active (very strenuous exercises/sports and physical
                work)
              </label>
            </div>
          </Form>
        )}
      </Formik> */}
    </WrapperUserForm>
  );
};
export default UserForm;
