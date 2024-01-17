import { styled } from 'styled-components';

export const WelcomeCont = styled('div')(() => {
  return {
    '.line-body': {
      position: 'absolute',
      marginTop: '40px',
      marginLeft: '-9px',
      width: '98px',
      height: '40px',
    },
    h1: {
      fontWeight: 500,
      fontSize: '38px',
      lineHeight: 1.05,
      letterSpacing: '0.01em',
      marginTop: '87px',
      marginBottom: '40px',
      position: 'relative',
      zIndex: '1',
    },
    button: {
      fontSize: '16px',
      lineHeight: 1.12,
      padding: '12px 40px',
      color: 'var(--white-color)',
      borderRadius: '12px',
    },
    '.buttons': {
      display: 'flex',
      gap: '14px',
    },
    '.signup': {
      backgroundColor: 'var(--orange-color)',
      transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    '.signup:hover': {
      backgroundColor: 'var(--light-orange-color)',
    },
    '.signup:focus': {
      backgroundColor: 'var(--light-orange-color)',
    },
    '.signin': {
      backgroundColor: 'transparent',
      border: '1px solid rgba(239, 237, 232, 0.3)',
      // borderColor: 'var(--white-color)',
      transition: 'border-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    '.signin:hover': {
      borderColor: 'var(--orange-color)',
    },
    '.signin:focus': {
      borderColor: 'var(--orange-color)',
    },
    '@media screen and (min-width: 768px)': {
      '.line-body': {
        marginTop: '84px',
        marginLeft: '-16px',
        width: '185px',
        height: '67px',
      },
      h1: {
        fontSize: '70px',
        lineHeight: 1.12,
        letterSpacing: '0.01em',
        marginTop: '149px',
        marginBottom: '64px',
      },
      button: {
        fontSize: '20px',
        lineHeight: 1.2,
        padding: '16px 60px',
      },
      '.buttons': {
        gap: '20px',
      },
    },
    '@media screen and (min-width: 1440px)': {
      h1: {
        width: '598px',
        marginTop: '160px',
      },
    },
  };
});
