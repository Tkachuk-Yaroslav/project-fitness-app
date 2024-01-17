import { useField } from 'formik';
import { RadioInput, RadioLabel } from './CustomRadio.styled';

const CustomRadio = ({ label, ...props }) => {
  const [field] = useField(props);
  // console.log(field);
  // console.log('meta', meta);
  return (
    <div>
      <RadioLabel>
        <RadioInput {...field} {...props} />
        {label}
      </RadioLabel>
    </div>
  );
};
export default CustomRadio;
