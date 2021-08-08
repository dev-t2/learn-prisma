import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IState, IUpdateCount } from './intefaces';

const initialState: IState = {
  count: 0,
};

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    updateCount: (state, action: PayloadAction<IUpdateCount>) => {
      state.count = action.payload.count;
    },
  },
});

export const { updateCount } = countSlice.actions;

export default countSlice.reducer;
