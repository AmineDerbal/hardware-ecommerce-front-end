import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async ({ username, password }: { username: string; password: string }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}auth/login`,
        {
          username,
          password,
        },
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

const initialState = {
  username: null as string | null,
  email: null as string | null,
  accessToken: null as string | null,
  isUserLoggedIn: false,
  isLodaing: false,
  isError: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      const isLodaing = true;
      const isError = false;
      return { ...state, isLodaing, isError };
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      const isLodaing = false;
      const isError = false;
      const isUserLoggedIn = true;
      const { username, email, accessToken } = action.payload;
      const currentUser = username;
      return {
        ...state,
        isLodaing,
        isError,
        isUserLoggedIn,
        username,
        currentUser,
        email,
        accessToken,
      };
    });
    builder.addCase(fetchUser.rejected, (state) => {
      const isLodaing = false;
      const isError = true;
      return { ...state, isLodaing, isError };
    });
  },
});

export default userSlice.reducer;
