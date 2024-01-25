import { createSlice } from '@reduxjs/toolkit';
import { setExerciseThunk } from './thunk';


const initialState = {
  exercises: [],
  products: [],
  isLoading: false,
  error: null,
};

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

export const diarySlice = createSlice({
  name: 'diaryPage',
  initialState,

  extraReducers: builder =>
    builder.addCase(setExerciseThunk.fulfilled, (state, { payload }) => {
      state.exercises = [...state.exercises, payload.exercisesDone];
    }),
});

export const diaryPageReducer = diarySlice.reducer;
