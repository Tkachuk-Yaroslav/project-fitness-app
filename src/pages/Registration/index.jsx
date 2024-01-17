import FormRegistration from 'Forms/FormRegistration';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { registrationThunk } from '../../redux/auth/thunks';

const Registration = () => {
  const dispatch = useDispatch();

  const registration = async body => {
    try {
      await dispatch(registrationThunk(body)).unwrap();
      toast.success('Login successful', {
        duration: 3000,
        position: 'top-center',
      });
    } catch (error) {
      toast.error('Email or password error', {
        duration: 3000,
        position: 'top-center',
      });
    }
  };

  return <FormRegistration registration={registration} />;
};

export default Registration;
