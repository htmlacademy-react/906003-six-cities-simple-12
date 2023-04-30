import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import { useState } from 'react';
import CitiesList from '../../components/cities-list/cities-list';
import { useAppSelector } from '../../hooks';
import OffersSort from '../../components/offers-sort/offers-sort';
import { getCurrentCity, getOffers, getOffersByCity, getStatus } from '../../store/offers-data/selectors';
import { Offer } from '../../types/types';
import Header from '../../components/header/header';
import { Status } from '../../const';
import Spinner from '../../components/spinner/spinner';
import MainEmpty from '../../components/main-empty/main-empty';

function Main(): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Offer | undefined>(undefined);
  const offers = useAppSelector(getOffers);
  const status = useAppSelector(getStatus);
  const offersByCity = useAppSelector(getOffersByCity);
  const currentCity = useAppSelector(getCurrentCity);

  const handleCardHover = (cardId: number | null) => {
    const currentOffer = offers && offers.find(({ id }) => id === cardId);
    setActiveOffer(currentOffer);
  };

  return (
    <div className='page page--gray page--main'>
      <Header />
      <main className={`page__main page__main--index ${(status === 'error' || !offersByCity.length) ? 'page__main--index-empty' : ''}`}>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <section className='locations container'>
            <CitiesList />
          </section>
        </div>
        <div className='cities'>

          {status === Status.Loading && (<Spinner />)}
          {(status === Status.Success && !!offersByCity.length) && (
            <div className='cities__places-container container'>
              <section className='cities__places places'>
                <h2 className='visually-hidden'>Places</h2>
                <b className='places__found'>{offersByCity.length} places to stay in {currentCity}</b>
                <OffersSort />
                <OffersList offers={offersByCity} handleMouseOver={handleCardHover} />
              </section>
              <div className='cities__right-section'>
                <Map offers={offersByCity} selectedOffer={activeOffer} />
              </div>
            </div>
          )}
          {(status === Status.Error || !offersByCity.length) && (
            <MainEmpty currentCity={currentCity} />
          )}
        </div>
      </main>
    </div>
  );
}

export default Main;
