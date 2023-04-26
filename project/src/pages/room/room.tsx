import ReviewsList from '../../components/reviews-list/reviews-list';
import ReviewsForm from '../../components/review-form/review-form';
import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-data/selectors';
import { getOfferById, getOffersNearby, getReviewsByOfferId, getStatus } from '../../store/offers-data/selectors';
import OffersList from '../../components/offers-list/offers-list';
import { getNumbersRatioInPercent, sortReviewsByDate } from '../../utils';
import { AuthorizationStatus, MAX_PHOTO_COUNT, MAX_RATING_VALUE, MAX_REVIEWS_COUNT, Status } from '../../const';
import { useParams } from 'react-router-dom';
import Map from '../../components/map/map';
import { useEffect } from 'react';
import Spinner from '../../components/spinner/spinner';
import { fetchOfferById } from '../../store/api-actions';

function Room(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const status = useAppSelector(getStatus);
  const offerById = useAppSelector(getOfferById);
  const reviews = useAppSelector(getReviewsByOfferId);
  const offersNearby = useAppSelector(getOffersNearby);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferById(Number(id)));
    }
  }, [id, dispatch]);

  const sortedReviews = [...reviews].sort(sortReviewsByDate).slice(0, MAX_REVIEWS_COUNT);

  return (
    <>
      <Header />
      {status === Status.Loading ? <Spinner /> : (
        <main className='page__main page__main--property'>
          <section className='property'>
            <div className='property__gallery-container container'>
              <div className='property__gallery'>
                {offerById?.images.slice(0, MAX_PHOTO_COUNT).map((img) => (
                  <div className='property__image-wrapper' key={img}>
                    <img className='property__image' src={img} alt='studio' />
                  </div>)
                )}
              </div>
            </div>
            <div className='property__container container'>
              <div className='property__wrapper'>
                {offerById?.isPremium && (
                  <div className='property__mark'>
                    <span>Premium</span>
                  </div>
                )}
                <div className='property__name-wrapper'>
                  {offerById?.title && (
                    <h1 className='property__name'>
                      {offerById.title}
                    </h1>
                  )}
                </div>
                <div className='property__rating rating'>
                  <div className='property__stars rating__stars'>
                    <span style={{ width: getNumbersRatioInPercent(MAX_RATING_VALUE, offerById?.rating) }}></span>
                    <span className='visually-hidden'>Rating</span>
                  </div>
                  <span className='property__rating-value rating__value'>{offerById?.rating}</span>
                </div>
                <ul className='property__features'>
                  <li className='property__feature property__feature--entire'>
                    {offerById?.type}
                  </li>
                  <li className='property__feature property__feature--bedrooms'>
                    {offerById?.bedrooms}
                  </li>
                  <li className='property__feature property__feature--adults'>
                    {offerById?.maxAdults}
                  </li>
                </ul>
                <div className='property__price'>
                  <b className='property__price-value'>&euro;{offerById?.price}</b>
                  <span className='property__price-text'>&nbsp;night</span>
                </div>
                <div className='property__inside'>
                  <h2 className='property__inside-title'>What&apos;s inside</h2>
                  <ul className='property__inside-list'>
                    {offerById?.goods.map((itemGoods) => (
                      <li className='property__inside-item' key={itemGoods}>
                        {itemGoods}
                      </li>
                    )
                    )}
                  </ul>
                </div>
                <div className='property__host'>
                  <h2 className='property__host-title'>Meet the host</h2>
                  <div className='property__host-user user'>
                    <div className={`property__avatar-wrapper ${offerById?.host.isPro ? 'property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                      <img className='property__avatar user__avatar' src={offerById?.host.avatarUrl} width='74' height='74' alt={offerById?.host.name} />
                    </div>
                    <span className='property__user-name'>
                      {offerById?.host.name}
                    </span>
                    {offerById?.host.isPro && (
                      <span className='property__user-status'>
                        Pro
                      </span>
                    )}
                  </div>
                  <div className='property__description'>
                    <p className='property__text'>
                      {offerById?.description}
                    </p>
                  </div>
                </div>
                <section className='property__reviews reviews'>
                  <h2 className='reviews__title'>Reviews &middot; <span className='reviews__amount'>{reviews.length}</span></h2>
                  <ReviewsList reviews={sortedReviews} />
                  {authorizationStatus === AuthorizationStatus.Auth && <ReviewsForm id={offerById?.id}/>}
                </section>
              </div>
            </div>
            <section className='property__map map'>
              <Map offers={offerById && [...offersNearby, offerById]} selectedOffer={offerById} />
            </section>
          </section>
          <div className='container'>
            <section className='near-places places'>
              <h2 className='near-places__title'>Other places in the neighbourhood</h2>
              <div className='near-places__list places__list'>
                {offersNearby.length ? (
                  <OffersList offers={offersNearby} />
                ) : (
                  <p>Sorry, no places found nearby</p>
                )}
              </div>
            </section>
          </div>
        </main>
      )}
    </>
  );
}

export default Room;
