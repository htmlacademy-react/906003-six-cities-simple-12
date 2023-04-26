import { useAppDispatch, useAppSelector } from '../../hooks';
import { SortType } from '../../const';
import { sortOffers } from '../../store/offers-data/offers-data';
import { useState } from 'react';
import { getSortType } from '../../store/offers-data/selectors';

function OffersSort(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const selectedSort = useAppSelector(getSortType);
  const dispatch = useAppDispatch();
  const placesOptionsList = [
    SortType.Popular,
    SortType.PriceLowToHigh,
    SortType.PriceHighToLow,
    SortType.TopRatedFirst
  ].map((currentSort) => (
    <li
      key={currentSort}
      className={`places__option ${selectedSort === currentSort ? 'places__option--active' : ''}`}
      tabIndex={0}
      onClick={() => dispatch(sortOffers(currentSort))}
    >
      {currentSort}
    </li>
  ));
  return (
    <form className='places__sorting' action='#' method='get' onClick={() => setIsOpen(!isOpen)}>
      <span className='places__sorting-caption'>Sort by</span>
      <span className='places__sorting-type' tabIndex={0}>
        {selectedSort}
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use xlinkHref='#icon-arrow-select'></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {placesOptionsList}
      </ul>
    </form>
  );
}

export default OffersSort;
