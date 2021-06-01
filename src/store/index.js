import {configureStore} from '@reduxjs/toolkit';
import matchesReducer from './matches';

export default configureStore({
  reducer: {
    matches: matchesReducer
  }
})