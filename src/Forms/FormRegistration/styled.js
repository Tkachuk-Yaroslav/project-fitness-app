import { styled } from 'styled-components';

export const RegisterCont = styled('div')(() => {
  return {
    '.input-error': {
      borderColor: '#fc8181',
    },
    '.error': {
      color: '#fc8181',
    },
    'button:disabled': {
      opacity: '0.35',
    },
  };
});
