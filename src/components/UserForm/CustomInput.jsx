import { useField } from 'formik';
import { CustomInputStyled, CustomLabelStyled } from './CustomInput.styled';

const CustomInput = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <>
      <CustomLabelStyled>
        {label}

        <CustomInputStyled
          {...field}
          {...props}
          // style={
          //   meta.error && meta.touched
          //     ? { borderColor: 'red' }
          //     : { borderColor: 'green' }
          // }
        />
      </CustomLabelStyled>
      {/* {meta.error && meta.touched ? (
        <p style={{ color: 'red' }}>Error {label}</p>
      ) : (
        <p style={{ color: 'green' }}>Success {label}</p>
      )} */}
    </>
  );
};
export default CustomInput;
