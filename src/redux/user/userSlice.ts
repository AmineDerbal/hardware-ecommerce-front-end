import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async ({ username, password }: { username: string; password: string }) => {
    try {
      console.log('fetchUser');
      console.log(`${process.env.REACT_APP_API_URL}auth/login`);
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}auth/login`,
        {
          username,
          password,
        },
      );
      console.log(response.data);
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
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
