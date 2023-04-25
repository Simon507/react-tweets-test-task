import { createSlice } from '@reduxjs/toolkit';

import {
  fetchAll,
  fetchFollow,
  fetchTotalPages,
  fetchFollowing,
  followUser,
  unfollowUser,
  fetchTotaFollowPages,
  fetchTotaUnfollowPages,
} from './operations';

const isPending = state => {
  state.isLoading = true;
};

const isRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const usersInitialState = {
  users: [],
  isLoading: false,
  error: null,
  totalpages: null,
};

const fetchSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  extraReducers: builder =>
    builder

      .addCase(fetchTotalPages.pending, isPending)
      .addCase(fetchTotalPages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.totalpages = action.payload;
      })
      .addCase(fetchTotalPages.rejected, isRejected)

      .addCase(fetchTotaFollowPages.pending, isPending)
      .addCase(fetchTotaFollowPages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.totalpages = action.payload;
      })
      .addCase(fetchTotaUnfollowPages.rejected, isRejected)

      .addCase(fetchTotaUnfollowPages.pending, isPending)
      .addCase(fetchTotaUnfollowPages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.totalpages = action.payload;
      })
      .addCase(fetchTotaFollowPages.rejected, isRejected)

      .addCase(fetchAll.pending, isPending)
      .addCase(fetchAll.fulfilled, (state, action) => {
        const currentPage = localStorage.getItem('targetPage');
        state.isLoading = false;
        state.error = null;

        if (currentPage === '1') {
          state.users = action.payload;
        } else {
          state.users = [...state.users, ...action.payload];
        }
      })
      .addCase(fetchAll.rejected, isRejected)

      .addCase(fetchFollow.pending, isPending)
      .addCase(fetchFollow.fulfilled, (state, action) => {
        const currentPage = localStorage.getItem('targetPage');
        state.isLoading = false;
        state.error = null;
        if (currentPage === '1') {
          state.users = action.payload;
        } else {
          state.users = [...state.users, ...action.payload];
        }
      })
      .addCase(fetchFollow.rejected, isRejected)

      .addCase(fetchFollowing.pending, isPending)
      .addCase(fetchFollowing.fulfilled, (state, action) => {
        const currentPage = localStorage.getItem('targetPage');
        state.isLoading = false;
        state.error = null;
        if (currentPage === '1') {
          state.users = action.payload;
        } else {
          state.users = [...state.users, ...action.payload];
        }
      })
      .addCase(fetchFollowing.rejected, isRejected)

      .addCase(followUser.pending, isPending)
      .addCase(followUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.users.findIndex(users => users.id === action.payload.id);
        state.users[index] = action.payload;
      })
      .addCase(followUser.rejected, isRejected)

      .addCase(unfollowUser.pending, isPending)
      .addCase(unfollowUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.users.findIndex(users => users.id === action.payload.id);
        state.users[index] = action.payload;
      })
      .addCase(unfollowUser.rejected, isRejected),
});

export const fetchReducer = fetchSlice.reducer;
