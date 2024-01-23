import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { registerSchema } from '../../../schemas/RegisterSchema/index';
import { AuthCont } from '../../styled';
import sprite from '../../../images/sprite.svg';
import { useState } from 'react';

const FormRegistration = ({ registration }) => {

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const onSubmit = async ({ name, email, password }, actions) => {
    registration({
      name: name,
      email: email,
      password: password,
    });
    await new Promise(resolve => setTimeout(resolve, 1000));
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
                  formik.errors.name &&
                  formik.touched.name &&
                  formik.values.name.length > 0
                    ? 'input-error'
                    : formik.touched.name && formik.values.name.length > 0
                    ? 'input-success'
                    : ''
                }
              />
              {!formik.errors.name &&
                formik.touched.name &&
                formik.values.name.length > 0 && (
                  <div className="notify-cont">
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <use href={`${sprite}#icon-checkbox-circle-fill`} />
                    </svg>
                    <p className="notify-descr success">Success name</p>
                  </div>
                )}
              {formik.errors.name &&
                formik.touched.name &&
                formik.values.name.length > 0 && (
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
                  formik.errors.email &&
                  formik.touched.email &&
                  formik.values.email.length > 0
                    ? 'input-error'
                    : formik.touched.email && formik.values.email.length > 0
                    ? 'input-success'
                    : ''
                }
              />
              {!formik.errors.email &&
                formik.touched.email &&
                formik.values.email.length > 0 && (
                  <div className="notify-cont">
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <use href={`${sprite}#icon-checkbox-circle-fill`} />
                    </svg>
                    <p className="notify-descr success">Success email</p>
                  </div>
                )}
              {formik.errors.email &&
                formik.touched.email &&
                formik.values.email.length > 0 && (
                  <div className="notify-cont">
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <use href={`${sprite}#icon-red`} />
                    </svg>
                    <p className="notify-descr error">{formik.errors.email}</p>
                  </div>
                )}
            </div>
            <div className="eye-cont">
              <input
                autoComplete="off"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.errors.password &&
                  formik.touched.password &&
                  formik.values.password.length > 0
                    ? 'input-error'
                    : formik.touched.password &&
                      formik.values.password.length > 0
                    ? 'input-success'
                    : ''
                }
              />
              <button
                type="button"
                className="eye-btn"
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                <svg className="eye">
                  <use
                    href={
                      showPassword
                        ? `${sprite}#icon-eye-off`
                        : `${sprite}#icon-eye`
                    }
                  />
                </svg>
              </button>
              {!formik.errors.password &&
                formik.touched.password &&
                formik.values.password.length > 0 && (
                  <div className="notify-cont">
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <use href={`${sprite}#icon-checkbox-circle-fill`} />
                    </svg>
                    <p className="notify-descr success">Success password</p>
                  </div>
                )}
              {formik.errors.password &&
                formik.touched.password &&
                formik.values.password.length > 0 && (
                  <div className="notify-cont">
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <use href={`${sprite}#icon-red`} />
                    </svg>
                    <p className="notify-descr error">
                      {formik.errors.password}
                    </p>
                  </div>
                )}
            </div>
          </div>
          <button
            type="submit"
            className="submit-btn"
            disabled={formik.isSubmitting}
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
