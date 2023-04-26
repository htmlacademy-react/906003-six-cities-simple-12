import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, AuthData, Offer, Review, User } from '../types/types';
import { ApiOption, AppRoute } from '../const';
import { saveToken, dropToken } from '../services/token';
import { redirectToRoute } from './actions';

export const fetchOffers = createAsyncThunk<Offer[], undefined, { extra: AxiosInstance }>(
  'offer/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offer[]>(ApiOption.OffersRoute);
    return data;
  }
);

export const fetchReviews = createAsyncThunk<Review[], number, { extra: AxiosInstance }>(
  'offer/fetchReviews',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<Review[]>(`${ApiOption.ReviewsRoute}/${offerId}`);
    return data;
  }
);

export const postReview = createAsyncThunk<
    Review[],
    { offerID: number; comment: string; rating: number },
    { extra: AxiosInstance }
  >(
    'offer/postReview',
    async ({ offerID, comment, rating}, {extra: api }) => {
      const { data } = await api.post<Review[]>(`${ApiOption.ReviewsRoute}/${offerID}`, {comment, rating});
      return data;
    }
  );

export const fetchOffersNearby = createAsyncThunk<Offer[], number, { extra: AxiosInstance; dispatch: AppDispatch }>(
  'offer/fetchOffersNearby',
  async (offerId, { extra: api, dispatch }) => {
    const { data } = await api.get<Offer[]>(`${ApiOption.OffersRoute}/${offerId}${ApiOption.OffersNearbyRoute}`);
    return data;
  }
);

export const fetchOfferById = createAsyncThunk<Offer | undefined, number, { extra: AxiosInstance; dispatch: AppDispatch }>(
  'offer/fetchOfferById',
  async (offerId, { extra: api, dispatch }) => {
    try {
      const { data } = await api.get<Offer>(`${ApiOption.OffersRoute}/${offerId}`);
      dispatch(fetchOffersNearby(offerId));
      dispatch(fetchReviews(offerId));
      return data;
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  }
);

export const checkAuth = createAsyncThunk<void, undefined, { extra: AxiosInstance }>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    await api.get(ApiOption.LoginRoute);
  }
);

export const logIn = createAsyncThunk<User, AuthData, { extra: AxiosInstance; dispatch: AppDispatch }>(
  'user/logIn',
  async ({ login: email, password }, { extra: api, dispatch }) => {
    const { data } = await api.post<User>(ApiOption.LoginRoute, { email, password });
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Root));
    return data;
  }
);

export const logout = createAsyncThunk<void, undefined, { extra: AxiosInstance }>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(ApiOption.LogoutRoute);
    dropToken();
  }
);
