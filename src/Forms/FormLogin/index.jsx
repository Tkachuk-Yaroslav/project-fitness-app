import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { loginSchema } from './../../schemas/LoginSchema/index';
import { LoginForm } from './styled';

const FormLogin = ({ login }) => {

  const onSubmit = async ({ email, password }, actions) => {
    login({
      email: email,
      password: password,
    });
    await new Promise(resolve => setTimeout(resolve, 1000));
    actions.resetForm();
  };
  
  const formik = useFormik({
    initialValues: {
      email:"",
      password:""
    },
    validationSchema: loginSchema,
    onSubmit,
  })

  return (
    <div className="mx-auto" style={{ width: '335px', marginTop: '127px' }}>
      <div className="card-body">
        <h1>Sign In</h1>
        <p>Welcome! Please enter your credentials to login to the platform:</p>
        <LoginForm onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <input
              name="email"
              type="email"
              // className="form-control"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // className={formik.errors.email && formik.touched.email ? "input-error" : ""}
              className={`form-control ${
                formik.errors.email && formik.touched.email ? 'input-error' : ''
              }`}
            />
            {formik.errors.email && formik.touched.email && (
              <p className="error">{formik.errors.email}</p>
            )}
          </div>
          <div className="mb-3">
            <input
              name="password"
              type="password"
              // className="form-control"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`form-control ${
                formik.errors.password && formik.touched.password
                  ? 'input-error'
                  : ''
              }`}
            />
            {formik.errors.password && formik.touched.password && (
              <p className="error">{formik.errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="btn btn-primary d-block w-25"
          >
            Sign In
          </button>
          <div className="d-flex align-items-center">
            Don’t have an account?{'\u00a0'}
            <Link
              to="/registration"
              className="btn btn-link"
              style={{ padding: '0' }}
            >
              Sign Up
            </Link>
          </div>
        </LoginForm>
      </div>
    </div>
  );
};

export default FormLogin;
