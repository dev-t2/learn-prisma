import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISetUser, IState } from './interfaces';

const initialState: IState = {
  user: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = true;
    },
    setUser: (state, action: PayloadAction<ISetUser>) => {
      state.isLoading = false;
      state.user = action.payload.user;
    },
  },
});

export const { setIsLoading, setUser } = userSlice.actions;

export default userSlice.reducer;
