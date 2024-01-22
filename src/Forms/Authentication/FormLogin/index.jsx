import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { loginSchema } from '../../../schemas/LoginSchema/index';
import { AuthCont } from '../../styled';
import sprite from '../../../images/sprite.svg';
import { useState } from 'react';

const FormLogin = ({ login }) => {

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  
  const onSubmit = async ({ email, password }, actions) => {
    login({
      email: email,
      password: password,
    });
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <AuthCont>
      <div>
        <h1>Sign In</h1>
        <p className="main-descr">
          Welcome! Please enter your credentials to login to the platform:
        </p>
        <form onSubmit={formik.handleSubmit}>
          <div className="inputs-cont">
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
                    : formik.touched.password && formik.values.password.length > 0
                    ? 'input-success'
                    : ''
                }
              />
              <button
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
            className="submit"
            disabled={formik.isSubmitting}
          >
            Sign In
          </button>
          <div className="navigate-cont">
            <p className="navigate-descr">Don’t have an account?{'\u00a0'}</p>
            <Link to="/signup" className="navigate-link">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </AuthCont>
  );
};

export default FormLogin;
