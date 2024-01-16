import { createSlice } from '@reduxjs/toolkit';
// import { refreshThunk, logoutThunk } from './thunks';
import { loginThunk, registrationThunk } from './thunks';
// import { handleLogout, handleRefreshFul, handleRefreshRej } from './helpers';
import { handleAuth } from './helpers';

const initialState = {
  token: '',
  user: null,
  isRefreshing: true,
};

export const authSlice = createSlice({
  name: 'register',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registrationThunk.fulfilled, handleAuth)
      .addCase(loginThunk.fulfilled, handleAuth)
      // .addCase(refreshThunk.fulfilled, handleRefreshFul)
      // .addCase(refreshThunk.rejected, handleRefreshRej)
      // .addCase(logoutThunk.fulfilled, handleLogout);
  },
});

export const authReducer = authSlice.reducer;
