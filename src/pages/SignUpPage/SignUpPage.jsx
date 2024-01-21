import { Container } from 'components/styles/Container/Container';
import FormRegistration from 'Forms/Authentication/FormRegistration';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { registrationThunk } from '../../redux/auth/thunks';
import { TrainingBgWrapperCont } from 'components/TrainingBgWrapper/TrainingBgWrapper.styled';
import StatisticsInfo from 'components/StatisticsInfo/StatisticsInfo';

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
    <TrainingBgWrapperCont className="pageSign">
      <Container>
        <FormRegistration registration={registration} />
        <StatisticsInfo />
      </Container>
    </TrainingBgWrapperCont>
  );
};

export default SignUpPage;
