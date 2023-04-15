import OffersList from '../../components/offers-list/offers-list';
import { Offer } from '../../types/types';
import Map from '../../components/map/map';
import { useState } from 'react';
import CitiesList from '../../components/cities-list/cities-list';
import { useAppSelector } from '../../hooks';
import OffersSort from '../../components/offers-sort/offers-sort';

type MainPageProps = {
  offers: Offer[];
}

function Main({ offers }: MainPageProps): JSX.Element {
  const offersByCity = useAppSelector((state) => state.offers.offers);
  const selectedCity = useAppSelector((state) => state.offers.city);
  const points = offers.map(({ id, location }) => (
    {
      id: id,
      location: location,
    }
  )
  );
  const [activeOffer, setActiveOffer] = useState(0);

  return (
    <>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <a className='header__logo-link header__logo-link--active' href='/'>
                <img className='header__logo' src='img/logo.svg' alt='6 cities logo' width='81' height='41' />
              </a>
            </div>
            <nav className='header__nav'>
              <ul className='header__nav-list'>
                <li className='header__nav-item user'>
                  <div className='header__nav-profile'>
                    <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                    <span className='header__user-name user__name'>Oliver.conner@gmail.com</span>
                  </div>
                </li>
                <li className='header__nav-item'>
                  <a className='header__nav-link' href='/'>
                    <span className='header__signout'>Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <section className='locations container'>
            <CitiesList/>
          </section>
        </div>
        <div className='cities'>
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>{offersByCity.length} places to stay in {selectedCity}</b>
              <OffersSort/>
              <OffersList offers={offersByCity} handleMouseOver={setActiveOffer} />
            </section>
            <div className='cities__right-section'>
              <Map points={points} selectedCardId={activeOffer} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
