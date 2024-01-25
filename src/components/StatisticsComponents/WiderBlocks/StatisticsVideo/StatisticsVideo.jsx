import { useSelector } from 'react-redux';
import sprite from '../../../../images/sprite.svg';
import { StatisticsWideCont } from '../StatisticsWide.styled';

const StatisticsVideo = () => {
  const videos = useSelector(state => state.statistic.countVideos);
  return (
    <StatisticsWideCont>
      <div className="circle">
        <svg className="icon-svg">
          <use href={`${sprite}#icon-triangle`} />
        </svg>
      </div>
      <div className="content-wrapper">
        <p className="value">{videos ?? 0}</p>
        <p className="descr">Video tutorial</p>
      </div>
    </StatisticsWideCont>
  );
};

export default StatisticsVideo;
