export const getNumbersRatioInPercent = (maxVal:number, val:number):number => Math.round( (val ?? 0 ) / maxVal * 100 );
export const dateToString = (date:string) => new Date(date).toLocaleString('en-EN', { month: 'long', year: 'numeric'});
