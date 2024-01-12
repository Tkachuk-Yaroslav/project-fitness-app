import styled from 'styled-components';

export const UserCardListStyled = styled('ul')({
  display: 'flex',
  gap: 14,
});
export const UserCardItemStyled = styled('li')({
  display: 'flex',
  padding: 14,

  backgroundColor: 'var(--orange-color)',
  borderRadius: 12,
  border: '1px solid rgba(239, 237, 232, 0.20)',
});
