import { useField } from 'formik';
import { RadioInput, RadioLabel } from './CustomRadio.styled';

const CustomRadio = ({ label, ...props }) => {
  const [field] = useField(props);
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
