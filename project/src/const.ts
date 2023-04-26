export enum AppRoute {
  Login = '/login',
  Room = '/offer',
  Root = '/',
  NotFound = '/page-not-found',
}

export enum NameSpace {
  Offer = 'OFFER',
  User = 'USER',
}

export const RatingTitle = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly',
] as const;

export enum FormOption {
  MinReviewLength = 50,
  MaxReviewLength = 300,
}

export enum City {
  Amsterdam = 'Amsterdam',
  Brussels = 'Brussels',
  Cologne = 'Cologne',
  Dusseldorf = 'Dusseldorf',
  Hamburg = 'Hamburg',
  Paris = 'Paris',
}

export enum UrlImage {
  MapMarkerDefault = '/img/pin.svg',
  MapMarkerCurrent = '/img/pin-active.svg',
}

export enum SortType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high:',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export const ApiOption = {
  BackendURL: 'https://12.react.pages.academy/six-cities-simple',
  RequestTimeout: 5000,
  OffersRoute: '/hotels',
  LoginRoute: '/login',
  LogoutRoute: '/logout',
  OffersNearbyRoute: '/nearby',
  ReviewsRoute: '/comments',
} as const;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Status {
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}

export const MAX_RATING_VALUE = 5;
export const DEFAULT_CITY = 'Paris';
export const PASSWORD_REG_EXP = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9]).+$/);
export const MAX_REVIEWS_COUNT = 10;
export const MAX_PHOTO_COUNT = 6;
