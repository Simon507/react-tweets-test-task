import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://644389be466f7c2b4b557099.mockapi.io/';

export const fetchTotalPages = createAsyncThunk('users/fetchTotalPages', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/users');
    return Math.ceil(response.data.length / 3);
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchTotaFollowPages = createAsyncThunk(
  'users/fetchTotaFollowPages',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/users?isFollowed=true');
      return Math.ceil(response.data.length / 3);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchTotaUnfollowPages = createAsyncThunk(
  'users/fetchTotaUnfollowPages',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/users?isFollowed=false');
      return Math.ceil(response.data.length / 3);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchAll = createAsyncThunk('users/fetchAll', async (currentPage, thunkAPI) => {
  try {
    const response = await axios.get(`/users?page=${currentPage}&limit=3`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchFollow = createAsyncThunk('users/fetchFollow', async (currentPage, thunkAPI) => {
  try {
    const response = await axios.get(`/users?isFollowed=false&page=${currentPage}&limit=3`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchFollowing = createAsyncThunk(
  'users/fetchFollowings',
  async (currentPage, thunkAPI) => {
    try {
      const response = await axios.get(`/users?isFollowed=true&page=${currentPage}&limit=3`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const followUser = createAsyncThunk(
  'users/followUser',
  async ([id, followers], thunkAPI) => {
    try {
      const response = await axios.put(`/users/${id}`, {
        followers: followers + 1,
        isFollowed: true,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const unfollowUser = createAsyncThunk(
  'users/unfollowUser',
  async ([id, followers], thunkAPI) => {
    try {
      const response = await axios.put(`/users/${id}`, {
        followers: followers - 1,
        isFollowed: false,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
