import { createSlice } from '@reduxjs/toolkit';

import { IState } from './interface';

const initialState: IState = {
  isLoading: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getDataRequest: (state) => {
      console.log('getDataRequest');

      state.isLoading = true;
    },
    getDataSuccess: (state) => {
      console.log('getDataSuccess');

      state.isLoading = false;
    },
    getDataFailure: (state) => {
      console.log('getDataFailure');

      state.isLoading = false;
    },
  },
});

export const { getDataRequest, getDataSuccess, getDataFailure } =
  dataSlice.actions;

export default dataSlice.reducer;
