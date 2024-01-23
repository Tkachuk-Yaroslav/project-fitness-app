import React, { useEffect, useState } from 'react';
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

import axios from 'axios';

const apiUrl = 'https://project-fitness-app-back.onrender.com/api/dairy/archive';

const DayDashboard = () => {
	const { user } = useSelector((state) => state.auth);
	const [dashboardData, setDashboardData] = useState(null);
	const dailyPhysicalActivity = 110;
	const caloriesRemaining = user.bmr - (dashboardData && dashboardData.consumedCalories);
	const sportsRemaining = dailyPhysicalActivity - (dashboardData && dashboardData.consumedBurned);

	// user.bmr - (dashboardData && dashboardData.consumedCalories)
	// (dashboardData && dashboardData.consumedBurned)
	const params = {
		date: '2024-01-17T13:57:32.000Z',
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(apiUrl, { params });
				setDashboardData(response.data);
			} catch (error) {
				console.error('error:', error);
			}
		};

		fetchData();
		// eslint-disable-next-line
	}, []);

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
						<DashboardData>{dashboardData && dashboardData.consumedCalories}</DashboardData>
					</DashboardItems>
					<DashboardItems>
						<DashboardTitle>
							<svg width={20} height={20}>
								<use xlinkHref={`${sprite}#icon-fire`} />
							</svg>
							Сalories burned
						</DashboardTitle>
						<DashboardData>{dashboardData && dashboardData.consumedBurned}</DashboardData>
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
							{sportsRemaining < 0 ? `+${-sportsRemaining}` : sportsRemaining} min
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
						Record all your meals in the calorie diary every day. This will help you be aware of
						your nutrition and make informed choices.
					</DashboardText>
				</DashboardTextContainer>
			</DashboardSection>
		</div>
	);
};

export default DayDashboard;
