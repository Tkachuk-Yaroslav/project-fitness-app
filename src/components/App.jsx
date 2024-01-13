import Calendar from './Calendar/Calendar';
import { Container } from './styles/Container/Container';
import 'react-datepicker/dist/react-datepicker.css';

export const App = () => {
  return (
    <Container>
      <Calendar />
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
