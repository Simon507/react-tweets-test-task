import { configureStore } from '@reduxjs/toolkit';

import { fetchReducer } from './usersSlice';

export const store = configureStore({
  reducer: {
    users: fetchReducer,
  },
});
