import { createSlice } from '@reduxjs/toolkit';
import {
  refreshThunk,
  logoutThunk,
  loginThunk,
  registrationThunk,
} from './thunks';
import {
  handleLogout,
  handleRefreshFul,
  handleRefreshRej,
  handleAuth,
} from './helpers';

const initialState = {
  token: '',
  user: null,
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
      .addCase(logoutThunk.fulfilled, handleLogout);
  },
});

export const authReducer = authSlice.reducer;
