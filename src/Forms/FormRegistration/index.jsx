import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { registerSchema } from './../../schemas/RegisterSchema/index';
import { RegisterCont } from './styled';

const FormRegistration = ({ registration }) => {

  const onSubmit = async ({ name, email, password }, actions) => {
    registration({
      name: name,
      email: email,
      password: password,
    });
    await new Promise(resolve => setTimeout(resolve, 1000));
    actions.resetForm();
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
    <RegisterCont className="mx-auto" style={{ width: '335px', marginTop: '127px' }}>
      <div className="card-body">
        <h1>Sign Up</h1>
        <p>
          Thank you for your interest in our platform. To complete the
          registration process, please provide us with the following
          information.
        </p>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <input
              name="name"
              type="text"
              // className="form-control"
              placeholder="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`form-control ${
                formik.errors.name && formik.touched.name ? 'input-error' : ''
              }`}
            />
            {formik.errors.name && formik.touched.name && (
              <p className="error">{formik.errors.name}</p>
            )}
          </div>
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
            Sign Up
          </button>
          <div className="d-flex align-items-center">
            Already have an account?{'\u00a0'}
            <Link to="/login" className="btn btn-link" style={{ padding: '0' }}>
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </RegisterCont>
  );
};

export default FormRegistration;