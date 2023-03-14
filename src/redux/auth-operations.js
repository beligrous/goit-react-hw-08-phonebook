import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  signupUser,
  loginUser,
  logoutUser,
  currentUser,
} from '../service/auth';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, thunkAPI) => {
    try {
      const response = await signupUser(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const response = await loginUser(data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await logoutUser();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const current = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const { persistedReducer } = thunkAPI.getState();
    const token = persistedReducer.auth.token;
    try {
      const response = await currentUser(token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const { persistedReducer } = thunkAPI.getState();
      const token = persistedReducer.auth.token;
      if (!token) {
        return false;
      }
    },
  }
);
