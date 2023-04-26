import { City } from '../../const';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { selectCity } from '../../store/offers-data/offers-data';
import { getCurrentCity } from '../../store/offers-data/selectors';

function CitiesList(): JSX.Element {
  const selectedCity = useAppSelector(getCurrentCity);
  const dispatch = useAppDispatch();

  const citiesList = [
    City.Paris,
    City.Cologne,
    City.Brussels,
    City.Amsterdam,
    City.Hamburg,
    City.Dusseldorf
  ].map((city) => (
    <li key={city} className='locations__item'>
      <Link className={selectedCity === city ?
        'locations__item-link tabs__item tabs__item--active' :
        'locations__item-link tabs__item'}
      to='/'
      onClick={() => {
        dispatch(selectCity(city));
      }}
      >
        <span>{city}</span>
      </Link>
    </li>
  ));

  return (
    <ul className='locations__list tabs__list'>
      {citiesList}
    </ul>
  );
}

export default CitiesList;
