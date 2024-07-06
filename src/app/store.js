import { configureStore } from "@reduxjs/toolkit";
import createLogger from 'redux-logger';
import cakeReducer from '../features/cake/cakeSlice';
import icecreamReducer from '../features/icecream/icecreamSlice';
import userReducer from '../features/users/userSlice';


const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer
  },
  middleware: ((getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(createLogger)
  })
});

export default store