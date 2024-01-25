import { createAsyncThunk } from '@reduxjs/toolkit';
import { setStatistics } from 'api/statistics';

export const statisticsThunk = createAsyncThunk(
  'statistic',
  async (_, { rejectWithValue }) => {
    try {
      const response = await setStatistics();
      // console.log(response)
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);