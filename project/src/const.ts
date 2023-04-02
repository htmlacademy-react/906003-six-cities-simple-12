export enum AppRoute {
  Login = '/login',
  Room = '/offer',
  Root = '/',
}

export enum Options {
  OffersCount = 6,
}

export enum OfferHousingtypes {
  Apartment = 'apartment',
  House = 'house',
  Hotel = 'hotel',
  Room = 'room',
}

export enum OfferGoods {
  WiFi = 'Wi-Fi',
  WashingMachine = 'Washing machine',
  Towels = 'Towels',
  Heating = 'Heating',
  CoffeeMachine = 'Coffee machine',
  BabySeat = 'Baby seat',
  Kitchen = 'Kitchen',
  DishWasher = 'Dishwasher',
  CabelTV = 'Cabel TV',
  Fridge = 'Fridge',
}

export const RatingTitles = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly',
] as const;

export enum FormOptions {
  MinReviewLength = 50,
  MaxReviewLength = 300,
  MaxRatingValue = 5,
}

export enum Cities {
  Amsterdam = 'Amsterdam',
  Brussels = 'Brussels',
  Cologne = 'Cologne',
  Dusseldorf = 'Dusseldorf',
  Hamburg = 'Hamburg',
  Paris = 'Paris',
}

export enum UrlImages {
  AvatarURL = 'https://i.pravatar.cc/300',
  MapMarkerDefault = '/img/pin.svg',
  MapMarkerCurrent = '/img/pin-active.svg',
}
