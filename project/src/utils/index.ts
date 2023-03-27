import { FormOptions } from '../const';

export const getNumbersRatioInPercent = (val:number, maxVal = FormOptions.maxRatingValue):number => Math.round( (val ?? 0 ) / maxVal * 100 );
export const dateToString = (date:string) => new Date(date).toLocaleString('en-EN', { month: 'long', year: 'numeric'});
