import { Offer } from '../../types/types';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offer[];
  handleMouseOver: (id: number) => void;
}

function OffersList({ offers, handleMouseOver }: OffersListProps): JSX.Element {
  const cardsList = offers.map(({ id, type, rating, price, title, images, isPremium, location }) => (
    <OfferCard
      key={id}
      id={id}
      type={type}
      rating={rating}
      price={price}
      title={title}
      images={images}
      isPremium={isPremium}
      location={location}
      handleMouseOver={() => handleMouseOver(id)}
    />
  ));
  return (
    <div className='cities__places-list places__list tabs__content'>
      {cardsList}
    </div>
  );
}

export default OffersList;
