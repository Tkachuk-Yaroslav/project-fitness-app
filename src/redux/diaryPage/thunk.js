import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDiaryData } from "api/dairy";

export const setExerciseThunk = createAsyncThunk(
    'exercises/setExercise',
    async (_, { rejectWithValue }) => {
      try {
        const result = await getDiaryData()
        return result
      } catch (e) {
        return rejectWithValue(e.message);
      }
    }
  )