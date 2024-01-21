import React from 'react';
import DayDashboard from 'components/DayDashboard/DayDashboard';
import DayProducts from 'components/DayProducts/DayProducts';
import DayExercises from 'components/DayExercises/DayExercises';
import { DiaryContainer, DiaryInfoContainer } from './DiaryPage.styled';
import { Container } from 'components/styles/Container/Container';
import Calendar from 'components/Calendar/Calendar';
import { Formik } from 'formik';
import { FormStyled } from 'components/UserForm/UserForm.styled';

const DiaryPage = () => {
	const onSubmit = async (values) => {
		console.log(values);
	};
	return (
		<Container>
			<Formik
				initialValues={{
					day: new Date(),
				}}
				onSubmit={onSubmit}
			>
				{() => (
					<FormStyled>
						<Calendar name='day' />
					</FormStyled>
				)}
			</Formik>
			<DiaryContainer>
				<DayDashboard />
				<DiaryInfoContainer>
					<DayProducts />
					<DayExercises />
				</DiaryInfoContainer>
			</DiaryContainer>
		</Container>
	);
};

export default DiaryPage;
