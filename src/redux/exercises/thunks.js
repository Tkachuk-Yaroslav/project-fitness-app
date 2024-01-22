import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getExercisesBodyParts,
  getExercisesEquipment,
  getExercisesMuscles,
} from 'api/ApiExercises';

export const fetchBodyParts = createAsyncThunk(
  'exercises/fetchBodyParts',
  async (_, thunkAPI) => {
    try {
      const response = await getExercisesBodyParts();

      return response.result;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchMuscles = createAsyncThunk(
  'exercises/fetchMuscles',
  async (_, thunkAPI) => {
    try {
      const response = await getExercisesMuscles();

      return response.result;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchEquipment = createAsyncThunk(
  'exercises/fetchEquipment',
  async (_, thunkAPI) => {
    try {
      const response = await getExercisesEquipment();

      return response.result;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
