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
  padding: 14,
  borderRadius: 12,
  border: '1px solid rgba(239, 237, 232, 0.30)',
  backgroundColor: 'inherit',
  outline: 'none',
  color: 'inherit',
  '&:focus': {
    border: '1px solid var(--orange-color)',
  },
});

export const WrapperInput = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 14,
});
