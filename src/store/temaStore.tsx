/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const tema = createSlice({
  name: 'tema',
  initialState: {
    selected: 'dark',
    colors: {
      bgColor: '#1e293b',
      text: '#FFFFFF',
    },
  },
  reducers: {
    light(state) {
      state.selected = 'light';
      state.colors.bgColor = '#FFFFFF';
      state.colors.text = '#000000';
    },
    dark(state) {
      state.selected = 'dark';
      state.colors.bgColor = '#1e293b';
      state.colors.text = '#FFFFFF';
    },

  },
});

export const { light, dark } = tema.actions;
export default tema.reducer;
