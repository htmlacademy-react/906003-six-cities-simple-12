export enum AppRoute {
  Login = '/login',
  Room = '/offer',
  Root = '/',
}

export enum Options {
  OffersCount = 6,
}

export enum OfferHousingtypes {
  apartment = 'apartment',
  house = 'house',
  hotel = 'hotel',
  room = 'room',
}

export enum OfferGoods {
  wiFi = 'Wi-Fi',
  washingMachine = 'Washing machine',
  towels = 'Towels',
  heating = 'Heating',
  coffeeMachine = 'Coffee machine',
  babySeat = 'Baby seat',
  kitchen = 'Kitchen',
  dishWasher = 'Dishwasher',
  cabelTV = 'Cabel TV',
  fridge = 'Fridge',
}

export const RatingStarsTitle = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly',
] as const;

export enum FormOptions {
  minReviewLength = 50,
  maxReviewLength = 300,
  maxRatingValue = 5,
}
