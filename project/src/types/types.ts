export type User = {
  id: number;
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type Coordinates = {
  latitude: number;
  longitude: number;
}

export type Location = {
  city: string;
  coordinates: Coordinates;
  zoom: number;
}

export type Offer = {
  id: number;
  type: string;
  rating: number;
  price: number;
  title: string;
  description: string;
  images: string[];
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  isPremium: boolean;
  host: User;
  location: Location;
}

export type Review = {
  id: number;
  comment: string;
  rating: number;
  date: string;
  user: User;
}
