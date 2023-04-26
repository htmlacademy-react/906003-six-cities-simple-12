import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { State } from '../../types/types';

export const getOffers = (state: State) => state[NameSpace.Offer].offers;
export const getCurrentCity = (state: State) => state[NameSpace.Offer].currentCity;
export const getSortType = (state: State) => state[NameSpace.Offer].sortType;
export const getOfferById = (state: State) => state[NameSpace.Offer].offerById;
export const getOffersNearby = (state: State) => state[NameSpace.Offer].offersNearby;
export const getReviewsByOfferId = (state: State) => state[NameSpace.Offer].reviews;
export const getStatus = (state: State) => state[NameSpace.Offer].status;

export const getOffersByCity = createSelector(getOffers, getCurrentCity, ( offers, city) => offers.filter(({city: {name}})=> name === city));

