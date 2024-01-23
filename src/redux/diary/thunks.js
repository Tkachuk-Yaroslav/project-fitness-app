import { createAsyncThunk } from "@reduxjs/toolkit";
import { setExercise } from "api/dairy";

export const setExerciseThunk = createAsyncThunk(
    'exercises/setExercise',
    async (data, { rejectWithValue }) => {
      try {
        const result = await setExercise(data)
        return result
      } catch (e) {
        return rejectWithValue(e.message);
      }
    }
  )