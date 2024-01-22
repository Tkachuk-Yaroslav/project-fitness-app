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
export const ButtonSave = styled('button')({
  width: 115,
  height: 42,
  padding: '12px 40px',
  borderRadius: 12,
  background: ' var(--orange-color)',
  color: 'inherit',
  // color: ' rgba(239, 237, 232, 0.60)',
  fontSize: 16,
  fontWeight: 500,
  lineHeight: 1.125,
  '&[disabled]': {
    color: ' rgba(239, 237, 232, 0.60)',
  },
  '@media screen and (min-width:768px)': {
    width: 144,
    height: 56,
    padding: '16px 50px',
    fontSize: 20,
    lineHeight: 1.2,
  },
});
