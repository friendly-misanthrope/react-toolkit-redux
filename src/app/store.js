import { configureStore } from "@reduxjs/toolkit";
import { reduxLogger } from 'redux-logger';
import cakeReducer from '../features/cake/cakeSlice';
import icecreamReducer from '../features/icecream/icecreamSlice';
import userReducer from '../features/users/userSlice';

const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer
  },
  middleware: ((getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(logger)
  })
});

export default store;