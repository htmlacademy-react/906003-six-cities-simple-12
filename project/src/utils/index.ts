import { Offer, Review } from '../types/types';
import { SortType } from '../const';
import dayjs from 'dayjs';

export const getNumbersRatioInPercent = (maxVal: number, val: number | undefined): string => `${Math.round((val ?? 0) / maxVal * 100)}%`;
export const dateToString = (date: string) => new Date(date).toLocaleString('en-EN', { month: 'long', year: 'numeric' });
export const sortOffersByType = (list: Offer[], sortType: SortType | string) => {
  switch (sortType) {
    case SortType.PriceHighToLow:
      return [...list].sort((A, B) => B.price - A.price);
    case SortType.PriceLowToHigh:
      return [...list].sort((A, B) => A.price - B.price);
    case SortType.TopRatedFirst:
      return [...list].sort((A, B) => B.rating - A.rating);
    default:
      return list;
  }
};

export const getRandomCity = (cities: string[]) => cities[Math.floor(Math.random() * cities.length)];
export const sortReviewsByDate = (A: Review, B: Review) => dayjs( B.date ).diff(dayjs( A.date ));
