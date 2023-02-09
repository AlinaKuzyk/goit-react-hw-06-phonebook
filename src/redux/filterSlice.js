import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,

  reducers: {
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

// Генераторы экшенов
export const { filterContact } = filterSlice.actions;

// Редюсер слайса
export const filterReducer = filterSlice.reducer;

// selectors
export const getFilterState = state => state.filter.filter;
