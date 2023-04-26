import { useState, useEffect } from 'react';
import { FormOption, MAX_RATING_VALUE, RatingTitle } from '../../const';
import RatingButton from '../rating-button/rating-button';
import { useAppDispatch } from '../../hooks';
import { postReview } from '../../store/api-actions';

type ReviewsFormProps = {
  id: number | undefined;
}

function ReviewsForm({ id }: ReviewsFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState(
    {
      rating: 0,
      review: '',
      isActive: false,
    }
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, rating: Number(event.target.value) });

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setFormData({ ...formData, review: event.target.value });

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (id) {
      dispatch(postReview(
        {
          offerID: id,
          comment: formData.review,
          rating: formData.rating,
        }
      ));
    }
  };

  const ratingButtonList = RatingTitle.map((cur, index) => (
    <RatingButton
      key={cur}
      value={MAX_RATING_VALUE - index}
      title={cur}
      handleInputChange={handleInputChange}
    />));

  useEffect(() => (formData.rating !== 0 &&
    (formData.review.length >= FormOption.MinReviewLength && formData.review.length <= FormOption.MaxReviewLength)) ?
    setFormData((oldValue) => ({ ...oldValue, isActive: true })) :
    setFormData((oldVAlue) => ({ ...oldVAlue, isActive: false })),
  [formData.rating, formData.review]
  );

  return (
    <form className='reviews__form form' action='#' method='post' onSubmit={handleFormSubmit}>
      <label className='reviews__label form__label' htmlFor='review'>Your review</label>
      <div className='reviews__rating-form form__rating'>
        {ratingButtonList}
      </div>
      <textarea className='reviews__textarea form__textarea' id='review' name='review' placeholder='Tell how was your stay, what you like and what can be improved' value={formData.review} onChange={handleTextAreaChange} >
      </textarea>
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set <span className='reviews__star'>rating</span> and describe your stay with at least <b className='reviews__text-amount'>{FormOption.MinReviewLength} characters</b>.
        </p>
        <button className='reviews__submit form__submit button' type='submit' disabled={!formData.isActive}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewsForm;
