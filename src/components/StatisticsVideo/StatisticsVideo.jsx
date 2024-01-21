import { StatisticsVideoCont } from './StatisticsVideo.styled';
import sprite from '../../images/sprite.svg';

const StatisticsVideo = () => {
  return (
    <StatisticsVideoCont>
      <div className="circle">
        <svg className="play">
          <use href={`${sprite}#icon-triangle`} />
        </svg>
      </div>
      <div className='content-wrapper'>
        <p className="value">350+</p>
        <p className="descr">Video tutorial</p>
      </div>
    </StatisticsVideoCont>
  );
};

export default StatisticsVideo;
