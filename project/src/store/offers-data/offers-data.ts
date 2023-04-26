import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { City, NameSpace, SortType, Status } from '../../const';
import { Offer, Review } from '../../types/types';
import { fetchOffers, fetchReviews, fetchOfferById, fetchOffersNearby, postReview } from '../api-actions';

type InitialState = {
  offers: Offer[];
  offersNearby: Offer[];
  offerById: Offer | undefined;
  reviews: Review[];
  sortType: SortType | string;
  currentCity: City | string;
  status: Status;
}

const initialState: InitialState = {
  offers: [],
  offersNearby: [],
  offerById: undefined,
  reviews: [],
  sortType: SortType.Popular,
  currentCity: City.Paris,
  status: Status.Loading,
};

export const offersData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    selectCity: (state, action: PayloadAction<string>) => {
      state.currentCity = action.payload;
    },
    sortOffers: (state, action: PayloadAction<string>) => {
      state.sortType = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.status = Status.Error;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.status = Status.Success;
      })

      .addCase(fetchReviews.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.status = Status.Error;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.status = Status.Success;
      })

      .addCase(postReview.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(postReview.rejected, (state) => {
        state.status = Status.Error;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.status = Status.Success;
      })

      .addCase(fetchOffersNearby.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(fetchOffersNearby.rejected, (state) => {
        state.status = Status.Error;
      })
      .addCase(fetchOffersNearby.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
        state.status = Status.Success;
      })

      .addCase(fetchOfferById.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(fetchOfferById.rejected, (state) => {
        state.status = Status.Error;
      })
      .addCase(fetchOfferById.fulfilled, (state, action) => {
        state.offerById = action.payload;
        state.status = Status.Success;
      });
  }
});

export const { selectCity, sortOffers } = offersData.actions;
