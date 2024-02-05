// src/features/colorModeSlice.ts
import { createSlice,  } from '@reduxjs/toolkit';
interface ColorModeState {
  mode: 'light' | 'dark';
}

const initialState: ColorModeState = {
  mode: 'light',
};

const colorModeSlice = createSlice({
  name: 'colorMode',
  initialState,
  reducers: {
    toggleColorMode: (state) => {
          state.mode = state.mode === 'light' ? 'dark' : 'light';
          // console.log("slice mode ",state.mode)
    },
  },
});

export const { toggleColorMode } = colorModeSlice.actions;
export const selectColorMode = (state: { colorMode: ColorModeState }) =>
  state.colorMode.mode;

export default colorModeSlice.reducer;
