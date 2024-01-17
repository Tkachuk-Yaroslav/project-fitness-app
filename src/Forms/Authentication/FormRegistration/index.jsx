import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { registerSchema } from '../../../schemas/RegisterSchema/index';
import { AuthCont } from '../../styled';
import sprite from '../../../images/sprite.svg';

const FormRegistration = ({ registration }) => {
  const onSubmit = async ({ name, email, password }, actions) => {
    registration({
      name: name,
      email: email,
      password: password,
    });
    await new Promise(resolve => setTimeout(resolve, 1000));
    // actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  return (
    <AuthCont>
      <div>
        <h1>Sign Up</h1>
        <p className="main-descr">
          Thank you for your interest in our platform. To complete the
          registration process, please provide us with the following
          information.
        </p>
        <form onSubmit={formik.handleSubmit}>
          <div className="inputs-cont">
            <div>
              <input
                autoComplete="off"
                name="name"
                type="text"
                placeholder="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.errors.name && formik.touched.name
                    ? 'input-error'
                    : formik.touched.name
                    ? 'input-success'
                    : ''
                }
              />
              {!formik.errors.name && formik.touched.name && (
                <div className="notify-cont">
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <use href={`${sprite}#icon-checkbox-circle-fill`} />
                  </svg>
                  <p className="notify-descr success">Success name</p>
                </div>
              )}
              {formik.errors.name && formik.touched.name && (
                <div className="notify-cont">
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <use href={`${sprite}#icon-red`} />
                  </svg>
                  <p className="notify-descr error">{formik.errors.name}</p>
                </div>
              )}
            </div>
            <div>
              <input
                autoComplete="off"
                name="email"
                type="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.errors.email && formik.touched.email
                    ? 'input-error'
                    : formik.touched.email
                    ? 'input-success'
                    : ''
                }
              />
              {!formik.errors.email && formik.touched.email && (
                <div className="notify-cont">
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <use href={`${sprite}#icon-checkbox-circle-fill`} />
                  </svg>
                  <p className="notify-descr success">Success email</p>
                </div>
              )}
              {formik.errors.email && formik.touched.email && (
                <div className="notify-cont">
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <use href={`${sprite}#icon-red`} />
                  </svg>
                  <p className="notify-descr error">{formik.errors.email}</p>
                </div>
              )}
            </div>
            <div>
              <input
                autoComplete="off"
                name="password"
                type="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.errors.password && formik.touched.password
                    ? 'input-error'
                    : formik.touched.password
                    ? 'input-success'
                    : ''
                }
              />
              {!formik.errors.password && formik.touched.password && (
                <div className="notify-cont">
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <use href={`${sprite}#icon-checkbox-circle-fill`} />
                  </svg>
                  <p className="notify-descr success">Success password</p>
                </div>
              )}
              {formik.errors.password && formik.touched.password && (
                <div className="notify-cont">
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <use href={`${sprite}#icon-red`} />
                  </svg>
                  <p className="notify-descr error">{formik.errors.password}</p>
                </div>
              )}
            </div>
          </div>
          <button
            type="submit"
            disabled={
              !formik.isValid ||
              formik.isSubmitting ||
              Object.keys(formik.touched).length === 0
            }
          >
            Sign Up
          </button>
          <div className="navigate-cont">
            <p className="navigate-descr">Already have an account?{'\u00a0'}</p>
            <Link to="/signin" className="navigate-link">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </AuthCont>
  );
};

export default FormRegistration;
