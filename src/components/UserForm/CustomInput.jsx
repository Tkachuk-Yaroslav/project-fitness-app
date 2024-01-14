import { useField } from 'formik';

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log('field', field);
  console.log('meta', meta);
  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        style={
          meta.error && meta.touched
            ? { borderColor: 'red' }
            : { borderColor: 'green' }
        }
      />
      {meta.error && meta.touched ? (
        <p style={{ color: 'red' }}>Error name</p>
      ) : (
        <p style={{ color: 'green' }}>Success name</p>
      )}
    </>
  );
};
export default CustomInput;
