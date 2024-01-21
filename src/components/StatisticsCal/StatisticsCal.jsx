import { StatisticsCalCont } from './StatisticsCal.styled';
import sprite from '../../images/sprite.svg';

const StatisticsCal = () => {
  return (
    <StatisticsCalCont>
      <div className="circle">
        <svg className="running">
          <use href={`${sprite}#icon-running-figure-white`} />
        </svg>
      </div>
      <div className="content-wrapper">
        <p className="value">500</p>
        <p className="descr">cal</p>
      </div>
    </StatisticsCalCont>
  );
};

export default StatisticsCal;
