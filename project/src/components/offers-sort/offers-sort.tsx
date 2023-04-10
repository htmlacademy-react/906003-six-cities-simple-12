import { useAppDispatch, useAppSelector } from '../../hooks';
import { SortTypes } from '../../const';
import { sortOffers } from '../../store/offer-filtering/offer-filtering';
import { useState } from 'react';

function OffersSort(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const selectedSort = useAppSelector((state) => state.offers.sortType);
  const dispatch = useAppDispatch();
  const placesOptionsList = [
    SortTypes.Popular,
    SortTypes.PriceLowToHigh,
    SortTypes.PriceHighToLow,
    SortTypes.TopRatedFirst
  ].map((currentSort) => (
    <li
      key={currentSort}
      className={`places__option ${selectedSort === currentSort ? 'places__option--active' : ''}`}
      tabIndex={0}
      onClick={() => dispatch(sortOffers({sortType: currentSort}))}
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
