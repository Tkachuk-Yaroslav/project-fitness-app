import styled from 'styled-components';

export const WrapperUser = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 31,
  margin: '40px 0',
  textAlign: 'center',
});
export const WrapperAvatar = styled('div')({
  position: 'relative',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid var(--orange-color)',
  borderRadius: '50%',
  width: 90,
  height: 90,
  '@media screen and (min-width: 768px)': {
    width: 150,
    height: 150,
  },
});

export const Title2 = styled('h2')({
  color: 'rgba(239, 237, 232, 1)',
  fontSize: 18,
  fontWeight: 400,
  lineHeight: 1.11,
  '@media screen and (min-width: 768px)': {
    fontSize: 24,
    lineHeight: 1.17,
  },
});
export const TextUser = styled('p')({
  marginTop: 4,
  color: 'rgba(239, 237, 232, 0.50)',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 1.29,
  '@media screen and (min-width: 768px)': {
    marginTop: 8,
  },
});
export const WrapperSVGText = styled('div')({
  margin: '0 auto',
  minWidth: 129,
  maxWidth: 390,
  display: 'flex',
  gap: 8,
});
export const TextItemUser = styled('p')({
  color: 'rgba(239, 237, 232, 0.80)',
  fontSize: 12,
  fontWeight: 400,
  lineHeight: 1.33,
  '@media screen and (min-width: 768px)': {
    lineHeight: 1.5,
  },
});
export const UserCardListStyled = styled('ul')({
  display: 'flex',
  justifyContent: 'center',
  gap: 14,
  marginBottom: 40,
  '@media screen and (min-width: 768px)': {
    gap: 16,
  },
});
export const UserCardItemStyled = styled('li')({
  minWidth: 129,
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: 16,
  padding: 14,

  backgroundColor: 'var(--orange-color)',
  borderRadius: 12,
  border: '1px solid rgba(239, 237, 232, 0.20)',
  '@media screen and (min-width: 768px)': {
    padding: 18,
  },
});
export const WrapperSVG = styled('div')({
  width: 24,
  height: 24,
  borderRadius: '50%',
  backgroundColor: 'var(--beige-color)',
});
export const TextInfoUser = styled('p')({
  color: 'rgba(239, 237, 232, 0.30)',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 1.29,
  paddingBottom: 41,
  '@media screen and (min-width: 768)': {
    fontSize: 16,
    lineHeight: 1.5,
    paddingBottom: 32,
  },
});
export const ButtonWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const ButtonAddAvatar = styled('button')({
  backgroundColor: 'transparent',
  position: 'absolute',
  bottom: '-20%',
  '@media screen and (min-width: 768px)': {
    bottom: '-15%',

    svg: {
      width: 32,
      height: 32,
    },
  },
});
