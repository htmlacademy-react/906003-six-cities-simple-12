import { store } from '../store/index';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AuthData = {
  login: string;
  password: string;
}

export type User = {
  id: number;
  name: string;
  email: string;
  avatarUrl: string;
  isPro: boolean;
  token: string;
}

export type City = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  name: string;
}

export type Offer = {
  id: number;
  type: string;
  rating: number;
  price: number;
  title: string;
  description: string;
  images: string[];
  previewImage: string;
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  isPremium: boolean;
  host: User;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  city: City;
}

export type Review = {
  id: number;
  comment: string;
  rating: number;
  date: string;
  user: User;
}
