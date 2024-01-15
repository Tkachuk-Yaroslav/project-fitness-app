import { useField } from 'formik';
import {
  CustomInputStyled,
  CustomLabelStyled,
  WrapperError,
} from './CustomInput.styled';

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <CustomLabelStyled>
      {label}
      <CustomInputStyled
        {...field}
        {...props}
        className={meta.error && meta.touched ? 'input-error' : ''}
        {...props}
      />
      {meta.error && meta.touched ? (
        <WrapperError className="error">{meta.error}</WrapperError>
      ) : (
        ''
      )}
    </CustomLabelStyled>
  );
};
export default CustomInput;
