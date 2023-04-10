import { Offer } from '../types/types';

export const getNumbersRatioInPercent = (maxVal:number, val:number):number => Math.round( (val ?? 0 ) / maxVal * 100 );
export const dateToString = (date:string) => new Date(date).toLocaleString('en-EN', { month: 'long', year: 'numeric'});
export const choiceOffersByCity = (offers: Offer[] , city: string) => offers.filter( (offer) => offer.location.city === city);
