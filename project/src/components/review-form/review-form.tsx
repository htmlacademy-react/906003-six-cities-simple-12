import { useState, useEffect } from 'react';
import { FormOptions, RatingTitles } from '../../const';
import RatingButton from '../rating-button/rating-button';

function ReviewsForm(): JSX.Element {
  const [formData, setFormData] = useState(
    {
      rating: 0,
      review: '',
      isActive: false
    }
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, rating: Number(event.target.value)});

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setFormData({ ...formData, review: event.target.value });

  const ratingButtonList = RatingTitles.map((cur, index) => (
    <RatingButton
      key={cur}
      value={FormOptions.MaxRatingValue - index}
      title={cur}
      handleInputChange={handleInputChange}
    />));

  useEffect(() => (formData.rating !== 0 &&
    (formData.review.length >= FormOptions.MinReviewLength && formData.review.length <= FormOptions.MaxReviewLength)) ?
    setFormData((oldValue) => ({ ...oldValue, isActive: true })) :
    setFormData((oldVAlue) => ({ ...oldVAlue, isActive: false })),
  [formData.rating, formData.review]
  );

  return (
    <form className='reviews__form form' action='#' method='post'>
      <label className='reviews__label form__label' htmlFor='review'>Your review</label>
      <div className='reviews__rating-form form__rating'>
        {ratingButtonList}
      </div>
      <textarea className='reviews__textarea form__textarea' id='review' name='review' placeholder='Tell how was your stay, what you like and what can be improved' value={formData.review} onChange={handleTextAreaChange} >
      </textarea>
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set <span className='reviews__star'>rating</span> and describe your stay with at least <b className='reviews__text-amount'>{FormOptions.MinReviewLength} characters</b>.
        </p>
        <button className='reviews__submit form__submit button' type='submit' disabled={!formData.isActive}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewsForm;
