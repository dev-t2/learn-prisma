import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISetIsLoading, ISetUser, IState } from './interfaces';

const initialState: IState = {
  user: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<ISetIsLoading>) => {
      state.isLoading = action.payload.isLoading;
    },
    setUser: (state, action: PayloadAction<ISetUser>) => {
      state.user = action.payload.user;
    },
  },
});

export const { setIsLoading, setUser } = userSlice.actions;

export default userSlice.reducer;
