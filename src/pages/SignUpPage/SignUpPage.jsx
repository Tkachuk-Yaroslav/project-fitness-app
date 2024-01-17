import { Container } from 'components/styles/Container/Container';
import FormRegistration from 'Forms/Authentication/FormRegistration';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { registrationThunk } from '../../redux/auth/thunks';

const SignUpPage = () => {
  const dispatch = useDispatch();

  const registration = async body => {
    try {
      await dispatch(registrationThunk(body)).unwrap();
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
      <FormRegistration registration={registration} />
    </Container>
  );
};

export default SignUpPage;
