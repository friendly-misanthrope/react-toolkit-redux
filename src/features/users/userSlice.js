import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  users: [],
  error: ''
}

// Promise resolves to pending, fulfilled, or rejected action type
export const fetchUsers = createAsyncThunk('users/fetchUsers', () => {
  return axios.get('https://jsonplaceholder.typicode.com/users')
    .then((user) => user.data)
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = ''
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  }
});

export default userSlice.reducer;