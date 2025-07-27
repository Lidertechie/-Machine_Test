import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../features/countries/countriesSlice';
import authReducer from '../features/auth/authSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    auth: authReducer,
  },
});

export default store;
