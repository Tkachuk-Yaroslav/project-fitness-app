import { createSlice } from '@reduxjs/toolkit';
import { statisticsThunk } from './thunks';

const initialState = {
  countVideos: '',
  totalBurnedCalories: '',
  countTotalUsers: '',
  totalSpentTimeExercise: '',
  totalExerciseDoneAllUsers: '',
};

const statisticSlice = createSlice({
  name: 'statistic',
  initialState,
  extraReducers: builder => {
    builder.addCase(statisticsThunk.fulfilled, (state, {payload}) => {
      state.countVideos = payload.countVideos;
      state.totalBurnedCalories = payload.totalBurnedCalories;
      state.countTotalUsers = payload.countTotalUsers;
      state.totalSpentTimeExercise = payload.totalSpentTimeExercise;
      state.totalExerciseDoneAllUsers = payload.totalExerciseDoneAllUsers;
    });
  },
});

export const statisticReducer = statisticSlice.reducer;
