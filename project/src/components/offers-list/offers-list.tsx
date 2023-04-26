import { useAppSelector } from '../../hooks';
import { getSortType } from '../../store/offers-data/selectors';
import { Offer } from '../../types/types';
import { sortOffersByType } from '../../utils';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offer[];
  handleMouseOver?: (id: number) => void;
}

function OffersList({ offers, handleMouseOver }: OffersListProps): JSX.Element {
  const sortType = useAppSelector(getSortType);
  const sortedOffers = sortOffersByType(offers , sortType);
  const cardsList = sortedOffers.map(({ id, type, rating, previewImage, price, title, images, isPremium, location }) => (
    <OfferCard
      key={id}
      id={id}
      type={type}
      rating={rating}
      previewImage={previewImage}
      price={price}
      title={title}
      images={images}
      isPremium={isPremium}
      location={location}
      onMouseOver={() => handleMouseOver && handleMouseOver(id)}
    />
  ));
  return (
    <div className='cities__places-list places__list tabs__content'>
      {cardsList}
    </div>
  );
}

export default OffersList;
