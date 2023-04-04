import { Review } from '../../types/types';
import ReviewItem from '../review-item/review-item';

function ReviewsList({reviews}: {reviews:Review[]}): JSX.Element {
  const reviewsList = reviews.map(({ comment, date, rating, user }) => (
    <ReviewItem
      key={date}
      comment={comment}
      date={date}
      rating={rating}
      user={user}
    />)
  );
  return (
    <>
      <h2 className='reviews__title'>Reviews &middot; <span className='reviews__amount'>{reviews.length}</span></h2>
      <ul className='reviews__list'>
        {reviewsList}
      </ul>
    </>

  );
}

export default ReviewsList;
