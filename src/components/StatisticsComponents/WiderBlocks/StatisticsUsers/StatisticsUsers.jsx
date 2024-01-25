import { useSelector } from 'react-redux';
import sprite from '../../../../images/sprite.svg';
import { StatisticsWideCont } from '../StatisticsWide.styled';

const StatisticsUsers = () => {
  const users = useSelector(state => state.statistic.countTotalUsers);
  return (
    <StatisticsWideCont>
      <div className="circle">
        <svg className="icon-svg">
          <use href={`${sprite}#icon-user-stat`} />
        </svg>
      </div>
      <div className="content-wrapper">
        <p className="value">{users ?? 0}</p>
        <p className="descr">Registered users</p>
      </div>
    </StatisticsWideCont>
  );
};

export default StatisticsUsers;
