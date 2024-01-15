import styled from 'styled-components';

export const RadioInput = styled('input')({
  marginRight: 9,
  '-webkit-appearance': 'none',
  width: 18,
  height: 18,
  borderRadius: '50%',
  background: 'inherit',
  border: ' 2px solid #636366',
  '&:checked': {
    background: 'var(--light-orange-color)',
    outline: ' 2px solid var(--light-orange-color)',
    border: '4px solid var(--black-color)',
  },
});
export const RadioLabel = styled('label')({
  fontSize: 16,
  fontWeight: 400,
  lineHeight: 1.5,
});
