import { createSlice } from '@reduxjs/toolkit';
import { setExerciseThunk } from './thunks';

const initialState = {
  exercises: [],
  products: [],
  isLoading: false,
  error: null,
};

export const diarySlice = createSlice({
  name: 'diary',
  initialState,

  extraReducers: builder =>
    builder.addCase(setExerciseThunk.fulfilled, (state, { payload }) => {
      state.exercises = [...state.exercises, payload.info];
    }),
});

export const diaryReducer = diarySlice.reducer;
