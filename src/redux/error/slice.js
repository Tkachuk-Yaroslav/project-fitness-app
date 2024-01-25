import { createSlice } from '@reduxjs/toolkit';

const headerSlice = createSlice({
  name: 'header',
  initialState: {
    isErrorPage: false,
  },
  reducers: {
    setErrorPage: (state, action) => {
      state.isErrorPage = action.payload;
    },
  },
});

export const { setErrorPage } = headerSlice.actions;
export const headerReducer = headerSlice.reducer;
