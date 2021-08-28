import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISetUser, IState } from './interfaces';

const initialState: IState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<ISetUser>) => {
      state.user = action.payload.user;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
