import { styled } from 'styled-components';

export const LoginForm = styled('form')(() => {
  return {
    '.input-error': {
      borderColor: '#fc8181',
    },
    '.error': {
      color: '#fc8181',
    },
    'button:disabled': {
      opacity: '0.35',
    }
  };
})