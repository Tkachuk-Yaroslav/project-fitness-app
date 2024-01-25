import { useSelector } from 'react-redux';
import sprite from '../../../../images/sprite.svg';
import { StatisticsHeightCont } from '../StatisticsHeight.styled';

const StatisticsCal = () => {
  const calories = useSelector(state => state.statistic.totalBurnedCalories);
  return (
    <StatisticsHeightCont>
      <div className="circle">
        <svg className="icon-svg">
          <use href={`${sprite}#icon-running-figure-white`} />
        </svg>
      </div>
      <div className="content-wrapper">
        <p className="value">{calories ?? 0}</p>
        <p className="descr">cal</p>
      </div>
    </StatisticsHeightCont>
  );
};

export default StatisticsCal;
