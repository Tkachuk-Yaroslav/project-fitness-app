import { createSlice } from '@reduxjs/toolkit';
import {
  refreshThunk,
  logoutThunk,
  loginThunk,
  registrationThunk,
} from './thunks';
import { handleRefreshFul, handleRefreshRej, handleAuth } from './helpers';

const initialState = {
  token: '',

  user: {
    result: {
      name: null,
      email: null,
      height: 160,
      currentWeight: 60,
      desiredWeight: 55,
      birthday: '08.01.1987',
      blood: 1,
      sex: 'male',
      levelActivity: 2,
    },
  },
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'register',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registrationThunk.fulfilled, handleAuth)
      .addCase(loginThunk.fulfilled, handleAuth)
      .addCase(refreshThunk.fulfilled, handleRefreshFul)
      .addCase(refreshThunk.rejected, handleRefreshRej)
      .addCase(logoutThunk.fulfilled, state => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
