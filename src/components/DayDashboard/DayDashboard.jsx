import React, { useContext, useEffect } from 'react';
import {
  DashboardSection,
  DashboardList,
  DashboardItems,
  DashboardTitle,
  DashboardData,
  DashboardText,
  IconWrap,
  DashboardTextContainer,
} from './DayDashboard.styled';
import sprite from '../../images/sprite.svg';
import { useSelector } from 'react-redux';

import { getDiaryData } from 'api/dairy';
import { DiaryContext } from '../../pages/DiaryPage/DiaryPage';

const DayDashboard = ({ calendarData, dataDash }) => {
  const { user } = useSelector(state => state.auth);
  // const [dashboardData, setDashboardData] = useState(null);
  console.log(dataDash, 'dataDash dataDash dataDash dataDash');

  const { setDataDash } = useContext(DiaryContext);
  const dailyPhysicalActivity = 110;
  const caloriesRemaining = Math.round(
    // user.bmr - (dashboardData && dashboardData.consumedCalories)
    user.bmr - (dataDash && dataDash.consumedCalories)
  );
  const sportsRemaining = Math.round(
    dailyPhysicalActivity - (dataDash && dataDash.consumedBurned / 60)
  );

  // user.bmr - (dashboardData && dashboardData.consumedCalories)
  // (dashboardData && dashboardData.consumedBurned)
  //   const params = {
  //     // date: '2024-01-17T13:57:32.000Z',
  //     date: '24/01/2024',
  //   };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(apiUrl, { params });
        const response = await getDiaryData(calendarData);
        // setDashboardData(response);
        setDataDash({
          consumedBurned: response.consumedBurned,
          consumedCalories: response.consumedCalories,
        });
        // console.log(response.data);
      } catch (error) {
        console.error('error:', error);
      }
    };

    fetchData();
  }, [calendarData, setDataDash]);

  return (
    <div>
      <DashboardSection>
        <DashboardList>
          <DashboardItems $index={1}>
            <DashboardTitle>
              <svg width={20} height={20}>
                <use xlinkHref={`${sprite}#icon-fork-knife`} />
              </svg>
              Daily calorie intake
            </DashboardTitle>
            <DashboardData>{user.bmr}</DashboardData>
          </DashboardItems>
          <DashboardItems $index={1}>
            <DashboardTitle>
              <svg width={20} height={20}>
                <use xlinkHref={`${sprite}#icon-dumbbell`} />
              </svg>
              Daily physical activity
            </DashboardTitle>
            <DashboardData>{dailyPhysicalActivity} min</DashboardData>
          </DashboardItems>
          <DashboardItems>
            <DashboardTitle>
              <svg width={20} height={20}>
                <use xlinkHref={`${sprite}#icon-apple`} />
              </svg>
              Сalories consumed
            </DashboardTitle>
            <DashboardData>
              {Math.round(dataDash && dataDash.consumedCalories)}
            </DashboardData>
          </DashboardItems>
          <DashboardItems>
            <DashboardTitle>
              <svg width={20} height={20}>
                <use xlinkHref={`${sprite}#icon-fire`} />
              </svg>
              Сalories burned
            </DashboardTitle>
            <DashboardData>{dataDash && dataDash.consumedBurned}</DashboardData>
          </DashboardItems>
          <DashboardItems $caloriesRemaining={caloriesRemaining}>
            <DashboardTitle>
              <svg width={20} height={20}>
                <use xlinkHref={`${sprite}#icon-bubble`} />
              </svg>
              Calories remaining
            </DashboardTitle>
            <DashboardData $index={1}>{caloriesRemaining}</DashboardData>
          </DashboardItems>
          <DashboardItems $sportsRemaining={sportsRemaining}>
            <DashboardTitle>
              <svg width={20} height={20}>
                <use xlinkHref={`${sprite}#icon-running-figure`} />
              </svg>
              Sports remaining
            </DashboardTitle>
            <DashboardData>
              {sportsRemaining < 0 ? `+${-sportsRemaining}` : sportsRemaining}{' '}
              min
            </DashboardData>{' '}
          </DashboardItems>
        </DashboardList>
        <DashboardTextContainer>
          <IconWrap>
            <svg width={20} height={20}>
              <use xlinkHref={`${sprite}#icon-attention`} />
            </svg>
          </IconWrap>
          <DashboardText>
            Record all your meals in the calorie diary every day. This will help
            you be aware of your nutrition and make informed choices.
          </DashboardText>
        </DashboardTextContainer>
      </DashboardSection>
    </div>
  );
};

export default DayDashboard;
