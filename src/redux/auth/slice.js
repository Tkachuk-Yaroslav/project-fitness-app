import { createSlice } from '@reduxjs/toolkit';
import {
  refreshThunk,
  logoutThunk,
  loginThunk,
  registrationThunk,
  setProfileSettingsThunk,
} from './thunks';
import { handleRefreshFul, handleRefreshRej, handleAuth } from './helpers';

const initialState = {
  token: '',

  user: {
    name: '',
    email: '',
    height: '',
    currentWeight: '',
    desiredWeight: '',
    birthday: '',
    blood: '',
    sex: '',
    levelActivity: '',
    bmr: '',
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
      })
      .addCase(setProfileSettingsThunk.fulfilled, (state, payload) => {
        const {name, height, currentWeight, desiredWeight, birthday, blood, sex, bmr} = payload
        state.user = {
          ...state.user,
          name, 
          height, 
          currentWeight, 
          desiredWeight, 
          birthday, 
          blood, 
          sex, 
          bmr
        }
      })
  },
});

export const authReducer = authSlice.reducer;
