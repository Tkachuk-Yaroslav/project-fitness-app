import styled from 'styled-components';

export const WrapperUser = styled('div')({
  textAlign: 'center',
  margin: '40px 0',
});

export const Title2 = styled('h2')({
  color: 'rgba(239, 237, 232, 1)',
  fontSize: 18,
  fontWeight: 400,
  lineHeight: 1.11,
});
export const TextUser = styled('p')({
  color: 'rgba(239, 237, 232, 0.50)',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 1.29,
});
export const WrapperSVGText = styled('div')({
  display: 'flex',
  gap: 8,
  alignItems: 'center',
});
export const TextItemUser = styled('p')({
  color: 'rgba(239, 237, 232, 0.80)',
  fontSize: 12,
  fontWeight: 400,
  lineHeight: 1.33,
});

export const UserCardListStyled = styled('ul')({
  display: 'flex',
  gap: 14,
  marginBottom: 40,
});
export const UserCardItemStyled = styled('li')({
  minWidth: 157,
  display: 'flex',
  flexWrap: 'wrap',
  gap: 16,
  padding: 14,

  backgroundColor: 'var(--orange-color)',
  borderRadius: 12,
  border: '1px solid rgba(239, 237, 232, 0.20)',
});
export const TextInfoUser = styled('p')({
  color: 'rgba(239, 237, 232, 0.30)',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 1.29,

  paddingBottom: 41,
});
export const ButtonWrapper = styled('div')({
  textAlign: 'end',
});
