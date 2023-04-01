import { Fragment } from 'react';

type RatingButtonProps = {
  value: number;
  title: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function RatingButton({ value, title, handleInputChange }: RatingButtonProps): JSX.Element {
  return (
    <Fragment key={value}>
      <input className='form__rating-input visually-hidden' name='rating' value={value} id={`${value}-stars`} type='radio' onChange={handleInputChange} />
      <label htmlFor={`${value}-stars`} className='reviews__rating-label form__rating-label' title={title}>
        <svg className='form__star-image' width='37' height='33'>
          <use xlinkHref='#icon-star'></use>
        </svg>
      </label>
    </Fragment>
  );
}

export default RatingButton;
