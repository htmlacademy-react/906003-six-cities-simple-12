import { configureStore } from '@reduxjs/toolkit';
import offersSlice from './offer-filtering/offer-filtering';

export const store = configureStore(
  {
    reducer: {
      offers: offersSlice,
    }
  });
