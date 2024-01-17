import { Container } from 'components/styles/Container/Container';
import FormLogin from 'Forms/Authentication/FormLogin';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/thunks';

const SignInPage = () => {
  const dispatch = useDispatch();

  const login = async body => {
    try {
      await dispatch(loginThunk(body)).unwrap();
      toast.success('Login successful', {
        duration: 3000,
        position: 'top-center',
      });
    } catch (error) {
      toast.error(error.message, {
        duration: 3000,
        position: 'top-center',
      });
    }
  };

  return (
    <Container>
      <FormLogin login={login} />
    </Container>
  );
};

export default SignInPage;
