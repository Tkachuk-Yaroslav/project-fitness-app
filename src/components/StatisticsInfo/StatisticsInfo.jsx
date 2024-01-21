import StatisticsCal from 'components/StatisticsCal/StatisticsCal';
import StatisticsInfoBlocks from 'components/StatisticsInfoBlocks/StatisticsInfoBlocks';
import StatisticsVideo from 'components/StatisticsVideo/StatisticsVideo';
import { StatisticsCont } from './StatisticsInfo.styled';

const StatisticsInfo = () => {
  return (
    <StatisticsCont>
        <StatisticsInfoBlocks>
          <StatisticsVideo />
        </StatisticsInfoBlocks>
        <StatisticsInfoBlocks className="calories">
          <StatisticsCal />
        </StatisticsInfoBlocks>
    </StatisticsCont>
  );
};

export default StatisticsInfo;
