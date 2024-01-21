import { StatisticsBlocksCont } from './StatisticsInfoBlocks.styled';

const StatisticsInfoBlocks = ({ className, children }) => {
  return (
    <StatisticsBlocksCont className={className}>
      {children}
    </StatisticsBlocksCont>
  );
};

export default StatisticsInfoBlocks;
