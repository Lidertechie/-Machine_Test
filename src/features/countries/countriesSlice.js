import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    const res = await axios.get(
      'https://restcountries.com/v2/all?fields=name,region,flag'
    );
    return res.data;
  }
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    allCountries: [],
    filteredCountries: [],
    status: 'idle',
    error: null,
    selectedRegion: 'All',
    visibleCount: 8,
  },
  reducers: {
    setRegion(state, action) {
      state.selectedRegion = action.payload;
      state.filteredCountries = action.payload === 'All'
        ? state.allCountries
        : state.allCountries.filter(c => c.region === action.payload);
      state.visibleCount = 8;
    },
    loadMore(state) {
      state.visibleCount += 8;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allCountries = action.payload;
        state.filteredCountries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { setRegion, loadMore } = countriesSlice.actions;

export default countriesSlice.reducer;