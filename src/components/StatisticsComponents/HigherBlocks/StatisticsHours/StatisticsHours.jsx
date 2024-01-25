import { StatisticsHeightCont } from '../StatisticsHeight.styled';
import sprite from '../../../../images/sprite.svg';
import { useSelector } from 'react-redux';

const StatisticsHours = () => {
  const minutes = useSelector(state => state.statistic.totalSpentTimeExercise);
  return (
    <StatisticsHeightCont>
      <div className="circle">
        <svg className="icon-svg">
          <use href={`${sprite}#icon-stopwatch`} />
        </svg>
      </div>
      <div className="content-wrapper">
        <p className="value">{minutes ?? 0}</p>
        <p className="descr">min</p>
      </div>
    </StatisticsHeightCont>
  );
};

export default StatisticsHours;
