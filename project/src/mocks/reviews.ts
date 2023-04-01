import {Review} from '../types/types';

export const reviews: Review[] = [
  {
    id: 1,
    comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At totam praesentium dicta ullam odio maxime dolore libero.',
    rating: 4,
    date: 'Fri Mar 11 2021 20:15:40 GMT+0300',
    user: {
      id: 11,
      name: 'Olivia',
      avatarUrl: '',
      isPro: false,
    }
  },
  {
    id: 2,
    comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At totam praesentium dicta ullam odio maxime dolore libero.',
    rating: 3,
    date: 'Sat Dec 16 2021 13:23:47 GMT+0300 (Москва, стандартное время)',
    user: {
      id: 22,
      name: 'John',
      avatarUrl: '',
      isPro: true,
    }
  },
  {
    id: 3,
    comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At totam praesentium dicta ullam odio maxime dolore libero.',
    rating: 5,
    date: 'Tue Apr 26 2022 15:46:28 GMT+0300 (Москва, стандартное время)',
    user: {
      id: 33,
      name: 'Mike',
      avatarUrl: '',
      isPro: false,
    }
  }, {
    id: 4,
    comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At totam praesentium dicta ullam odio maxime dolore libero.',
    rating: 4,
    date: 'Mon May 12 2022 21:18:43 GMT+0300',
    user: {
      id: 44,
      name: 'Jennifer',
      avatarUrl: '',
      isPro: true,
    }
  }
];
