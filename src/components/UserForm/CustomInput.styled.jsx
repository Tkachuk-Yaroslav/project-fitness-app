import styled from 'styled-components';

export const CustomLabelStyled = styled('label')({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  marginBottom: 4,
  color: ' rgba(239, 237, 232, 0.50)',

  fontSize: 12,
  fontWeight: 400,
  lineHeight: 1.5,
});

export const CustomInputStyled = styled('input')({
  color: 'var(--white-color)',

  fontSize: 14,
  lineHeight: 1.286,
  padding: 14,
  borderRadius: 12,
  border: '1px solid rgba(239, 237, 232, 0.30)',
  backgroundColor: 'inherit',
  outline: 'none',
  '&.disabled': {
    color: 'rgba(239, 237, 232, 0.60)',
  },
  '&.input-form': {
    width: 160,
  },
  '&:focus': {
    border: '1px solid var(--orange-color)',
  },
  '&&.input-error': {
    border: '1px solid var(--error-color)',
  },
  // '&.input-success': {
  //   border: '1px solid var(--success-color)',
  // },
});

export const WrapperInput = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 14,
  justifyContent: 'space-around',
});
export const WrapperError = styled('div')({
  width: 160,
  color: 'var(--error-color)',
});
