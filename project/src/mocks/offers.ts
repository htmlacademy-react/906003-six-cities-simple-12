import { Offer } from '../types/types';
import { OfferHousingtypes, OfferGoods } from '../const';

export const offers: Offer[] = [
  {
    id: 1,
    type: OfferHousingtypes.apartment,
    rating: 4.8,
    price: 120,
    title: 'Beautiful &amp; luxurious studio at great location',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    bedrooms: 3,
    maxAdults: 4,
    goods: [
      OfferGoods.wiFi,
      OfferGoods.washingMachine,
      OfferGoods.towels,
      OfferGoods.heating,
      OfferGoods.coffeeMachine,
      OfferGoods.babySeat,
      OfferGoods.kitchen,
      OfferGoods.dishWasher,
      OfferGoods.cabelTV,
      OfferGoods.fridge
    ],
    isPremium: true,
    host: {
      id: 5,
      name: 'Vitaliy',
      avatarUrl: '',
      isPro: true,
    }
  },
  {
    id: 2,
    type: OfferHousingtypes.apartment,
    rating: 4.3,
    price: 200,
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    bedrooms: 2,
    maxAdults: 4,
    goods: ['Wi-Fi', 'Cabel TV', 'kitchen'],
    isPremium: false,
    host: {
      id: 1,
      name: 'Jacob',
      avatarUrl: '',
      isPro: true,
    }
  },
  {
    id: 3,
    type: OfferHousingtypes.apartment,
    rating: 4.3,
    price: 250,
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    bedrooms: 2,
    maxAdults: 4,
    goods: ['Wi-Fi', 'Cabel TV', 'kitchen'],
    isPremium: true,
    host: {
      id: 7,
      name: 'Henry',
      avatarUrl: '',
      isPro: true,
    }
  },
  {
    id: 4,
    type: OfferHousingtypes.apartment,
    rating: 4.3,
    price: 400,
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    bedrooms: 2,
    maxAdults: 4,
    goods: ['Wi-Fi', 'Cabel TV', 'kitchen'],
    isPremium: true,
    host: {
      id: 4,
      name: 'Tracy',
      avatarUrl: '',
      isPro: false,
    }
  },
  {
    id: 5,
    type: OfferHousingtypes.apartment,
    rating: 4.3,
    price: 180,
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    bedrooms: 2,
    maxAdults: 4,
    goods: ['Wi-Fi', 'Cabel TV', 'kitchen'],
    isPremium: true,
    host: {
      id: 3,
      name: 'Ashley',
      avatarUrl: '',
      isPro: true,
    }
  },
  {
    id: 6,
    type: OfferHousingtypes.apartment,
    rating: 4.3,
    price: 300,
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    bedrooms: 2,
    maxAdults: 4,
    goods: ['Wi-Fi', 'Cabel TV', 'kitchen'],
    isPremium: true,
    host: {
      id: 9,
      name: 'Kelly',
      avatarUrl: '',
      isPro: true,
    }
  }
];
