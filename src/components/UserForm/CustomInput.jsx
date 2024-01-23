import { useField } from 'formik';
import {
  CustomInputStyled,
  CustomLabelStyled,
  WrapperInfo,
} from './CustomInput.styled';
import sprite from '../../images/sprite.svg';

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <CustomLabelStyled>
      {label}
      <CustomInputStyled
        {...field}
        {...props}
        className={
          meta.error && meta.touched
            ? 'input-error'
            : meta.touched && !meta.error
            ? 'input-success'
            : ''
        }
        {...props}
      />
      {meta.error && meta.touched ? (
        <WrapperInfo className="error">
          <div style={{ display: 'flex', gap: 1 }}>
            <svg width="16" height="16" viewBox="0 0 16 16">
              <use href={`${sprite}#icon-red`} />
            </svg>
            {meta.error}
          </div>
        </WrapperInfo>
      ) : meta.touched && !meta.error ? (
        <WrapperInfo className="success">
          <div style={{ display: 'flex', gap: 1 }}>
            <svg width="16" height="16" viewBox="0 0 16 16">
              <use href={`${sprite}#icon-checkbox-circle-fill`} />
            </svg>
            Success
          </div>
        </WrapperInfo>
      ) : (
        ''
      )}
    </CustomLabelStyled>
  );
};
export default CustomInput;
