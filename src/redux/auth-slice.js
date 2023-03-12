import { createSlice } from '@reduxjs/toolkit';
import { signup, login } from './auth-operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    token: '',
    isLogin: false,
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(signup.pending, state => {
        return { ...state, loading: true, error: null };
      })
      .addCase(signup.fulfilled, (state, action) => {
        return {
          ...state,
          user: action.payload.user,
          token: action.payload.token,
          isLogin: true,
          loading: false,
        };
      })
      .addCase(signup.rejected, (state, action) => {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      })
      .addCase(login.pending, state => {
        return { ...state, loading: true, error: null };
      })
      .addCase(login.fulfilled, (state, action) => {
        return {
          ...state,
          user: action.payload.user,
          loading: false,
          token: action.payload.token,
          isLogin: true,
        };
      })
      .addCase(login.rejected, (state, action) => {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      });
  },
});

export const authReducer = authSlice.reducer;
