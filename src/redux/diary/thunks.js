import { createAsyncThunk } from '@reduxjs/toolkit';
import { setExercise } from 'api/dairy';
import toast from 'react-hot-toast';
export const setExerciseThunk = createAsyncThunk(
  'exercises/setExercise',
  async (data, { rejectWithValue }) => {
    try {
      const result = await setExercise(data);
      return result;
    } catch (e) {
      return rejectWithValue(
        toast.error('Failed to add exercise to dairy', {
          duration: 3000,
          position: 'top-center',
        })
      );
    }
  }
);
