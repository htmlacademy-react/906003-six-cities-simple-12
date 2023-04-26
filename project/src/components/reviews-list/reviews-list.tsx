import { Review } from '../../types/types';
import ReviewItem from '../review-item/review-item';

function ReviewsList({ reviews }: { reviews: Review[] }): JSX.Element {
  const reviewsList = reviews.map(({ id, comment, date, rating, user }) => (
    <ReviewItem
      key={id}
      comment={comment}
      date={date}
      rating={rating}
      user={user}
    />)
  );
  return (
    <ul className='reviews__list'>
      {reviewsList}
    </ul>
  );
}

export default ReviewsList;
