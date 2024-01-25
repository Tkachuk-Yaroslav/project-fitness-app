import StatisticsCal from 'components/StatisticsComponents/HigherBlocks/StatisticsCal/StatisticsCal';
import StatisticsInfoBlocks from 'components/StatisticsComponents/StatisticsInfoBlocks/StatisticsInfoBlocks';
import StatisticsVideo from 'components/StatisticsComponents/WiderBlocks/StatisticsVideo/StatisticsVideo';
import { StatisticsCont } from './StatisticsInfo.styled';
import StatisticsUsers from '../WiderBlocks/StatisticsUsers/StatisticsUsers';
import StatisticsUsersExercises from '../WiderBlocks/StatisticsUsersExercises/StatisticsUsersExercises';
import StatisticsHours from '../HigherBlocks/StatisticsHours/StatisticsHours';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { statisticsThunk } from '../../../redux/statistics/thunks';

const StatisticsInfo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(statisticsThunk());
  }, [dispatch]);

  return (
    <StatisticsCont>
      <StatisticsInfoBlocks className="video">
        <StatisticsVideo />
      </StatisticsInfoBlocks>
      <StatisticsInfoBlocks className="calories">
        <StatisticsCal />
      </StatisticsInfoBlocks>
      <StatisticsInfoBlocks className="users">
        <StatisticsUsers />
      </StatisticsInfoBlocks>
      <StatisticsInfoBlocks className="hours">
        <StatisticsHours />
      </StatisticsInfoBlocks>
      <StatisticsInfoBlocks className="exercises">
        <StatisticsUsersExercises />
      </StatisticsInfoBlocks>
    </StatisticsCont>
  );
};

export default StatisticsInfo;
