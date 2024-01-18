import { Container } from 'components/styles/Container/Container';
import FormLogin from 'Forms/Authentication/FormLogin';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/thunks';
import { TrainingBgWrapperCont } from 'components/TrainingBgWrapper/TrainingBgWrapper.styled';

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
    <TrainingBgWrapperCont className="pageSign">
      <Container>
        <FormLogin login={login} />
      </Container>
    </TrainingBgWrapperCont>
  );
};

export default SignInPage;
