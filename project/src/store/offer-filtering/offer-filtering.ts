import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cities, SortTypes } from '../../const';
import { Offer } from '../../types/types';
import { choiceOffersByCity } from '../../utils';
import { offers } from '../../mocks/offers';

const DEFAULT_CITY = Cities.Paris;

type InitialState = {
  city: string;
  offers: Offer[];
  sortType: SortTypes;
}

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: choiceOffersByCity(offers, DEFAULT_CITY),
  sortType: SortTypes.Popular,
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    selectCity: (state, action: PayloadAction<string>) => {
      state.offers = choiceOffersByCity(offers, action.payload);
      state.city = action.payload;
      state.sortType = SortTypes.Popular;
    },
    sortOffers: (state, action: PayloadAction<{ sortType: string }>) => {
      if (state.sortType !== action.payload.sortType) {
        switch (action.payload.sortType) {
          case SortTypes.PriceLowToHigh:
            state.offers = state.offers.sort((a: Offer, b: Offer) => a.price - b.price);
            state.sortType = SortTypes.PriceLowToHigh;
            break;
          case SortTypes.PriceHighToLow:
            state.offers = state.offers.sort((a: Offer, b: Offer) => b.price - a.price);
            state.sortType = SortTypes.PriceHighToLow;
            break;
          case SortTypes.TopRatedFirst:
            state.offers = state.offers.sort((a: Offer, b: Offer) => b.rating - a.rating);
            state.sortType = SortTypes.TopRatedFirst;
            break;
          case SortTypes.Popular:
            state.offers = choiceOffersByCity(offers, state.city);
            state.sortType = SortTypes.Popular;
            break;
        }
      }
    }
  }
});

export const {selectCity, sortOffers} = offersSlice.actions;
export default offersSlice.reducer;
