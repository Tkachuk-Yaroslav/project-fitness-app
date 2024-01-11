import { Container } from './styles/Container/Container';

export const App = () => {
  return (
    <Container>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h2>Here will be our cool site =-)</h2>
      </div>
    </Container>
  );
};
