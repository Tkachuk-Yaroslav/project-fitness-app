import { useSelector } from 'react-redux';
import sprite from '../../../../images/sprite.svg';
import { StatisticsWideCont } from '../StatisticsWide.styled';

const StatisticsUsersExercises = () => {
  const exercises = useSelector(
    state => state.statistic.totalExerciseDoneAllUsers
  );
  return (
    <StatisticsWideCont>
      <div className="circle">
        <svg className="icon-svg">
          <use href={`${sprite}#icon-muscle-up`} />
        </svg>
      </div>
      <div className="content-wrapper">
        <p className="value">{exercises ?? 0}</p>
        <p className="descr">Exercises performed</p>
      </div>
    </StatisticsWideCont>
  );
};

export default StatisticsUsersExercises;
