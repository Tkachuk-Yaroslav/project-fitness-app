import styled from 'styled-components';
import { Form } from 'formik';

export const FormStyled = styled(Form)({
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
});

export const WrapperUserForm = styled('div')({
  padding: '19px 0 40px 0',
});

export const WrapperRadio = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  gap: 5,
});
export const WrapperForBloodAndSex = styled('div')({
  display: 'flex',
  gap: 9,
});
