import { useField } from 'formik';

const CustomRadio = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log('field', field);
  console.log('meta', meta);
  return (
    <div>
      <input {...field} {...props} />
      <label>{label}</label>
    </div>
  );
};
export default CustomRadio;
