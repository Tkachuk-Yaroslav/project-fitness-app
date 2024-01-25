import { Container } from 'components/styles/Container/Container';
import { WelcomeCont } from './styled';
import sprite from '../../images/sprite.svg';
import { TrainingBgWrapperCont } from 'components/TrainingBgWrapper/TrainingBgWrapper.styled';
import StatisticsInfo from 'components/StatisticsComponents/StatisticsInfo/StatisticsInfo';

const { useNavigate } = require('react-router-dom');

const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <TrainingBgWrapperCont>
      <Container>
        <WelcomeCont>
          <svg className="line-body">
            <use className="line-sca" href={`${sprite}#icon-line`} />
          </svg>
          <h1>Transforming your body shape with Power Pulse</h1>
          <div className="buttons">
            <button className="signup" onClick={() => navigate('/signup')}>
              Sign Up
            </button>
            <button className="signin" onClick={() => navigate('/signin')}>
              Sign In
            </button>
          </div>
          <StatisticsInfo />
        </WelcomeCont>
      </Container>
    </TrainingBgWrapperCont>
  );
};

export default WelcomePage;
