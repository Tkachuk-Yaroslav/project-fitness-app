import { createSlice } from '@reduxjs/toolkit';
import {
  // fetchBodyParts,
  // fetchEquipment,
  // fetchMuscles,
  setExerciseThunk,
} from './thunks';

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
  name: 'diary',
  initialState,

  extraReducers: builder =>
    builder.addCase(setExerciseThunk.fulfilled, (state, { payload }) => {
      state.exercises = [...state.exercises, payload.info];
    }),
});

export const diaryReducer = diarySlice.reducer;
