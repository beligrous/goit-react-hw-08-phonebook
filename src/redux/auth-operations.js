import { createAsyncThunk } from '@reduxjs/toolkit';
import { signupUser, loginUser } from '../service/auth';

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
