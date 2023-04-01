import { useState } from 'react';
import { Offer } from '../../types/types';
import OfferCard from '../offer-card/offer-card';

function OffersList({ offers }: { offers: Offer[] }): JSX.Element {
  const [, setActiveOffer] = useState(0);
  const cardsList = offers.map(({ id, type, rating, price, title, images, isPremium }) => (
    <OfferCard
      key={id}
      id={id}
      type={type}
      rating={rating}
      price={price}
      title={title}
      images={images}
      isPremium={isPremium}
      handleMouseOver={() => setActiveOffer(id)}
    />
  ));
  return (
    <div className='cities__places-list places__list tabs__content'>
      {cardsList}
    </div>
  );
}

export default OffersList;
