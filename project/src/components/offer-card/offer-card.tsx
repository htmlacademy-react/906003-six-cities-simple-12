import { Link } from 'react-router-dom';
import { Offer } from '../../types/types';
import { getNumbersRatioInPercent } from '../../utils';
import { MAX_RATING_VALUE } from '../../const';

export type OfferCardProps = Omit<Offer, 'bedrooms' | 'maxAdults' | 'goods' | 'host' | 'description' | 'city'> & { onMouseOver?: (id: number | null) => void }

function OfferCard(
  {
    id,
    isPremium,
    previewImage,
    price,
    rating,
    type,
    title,
    onMouseOver
  }: OfferCardProps): JSX.Element {
  return (
    <article className='cities__card place-card' onMouseOver={() =>onMouseOver && onMouseOver(id)} onMouseLeave={() =>onMouseOver && onMouseOver(null)} >
      {isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link to={`/offer/${id}`}>
          <img className='place-card__image' src={previewImage} width='260' height='200' alt={title} />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>

        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: getNumbersRatioInPercent(MAX_RATING_VALUE, rating) }}></span>
            <span className='visually-hidden'>{rating}</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className='place-card__type'>{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
