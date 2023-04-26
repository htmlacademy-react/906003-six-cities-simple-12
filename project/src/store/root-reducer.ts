import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offersData } from './offers-data/offers-data';
import { userData } from './user-data/user-data';

const rootReducer = combineReducers({
  [NameSpace.Offer]: offersData.reducer,
  [NameSpace.User]: userData.reducer,
});

export default rootReducer;
