import { combineReducers } from '@reduxjs/toolkit';

import count from './count';

const rootReducer = combineReducers({
  count,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
