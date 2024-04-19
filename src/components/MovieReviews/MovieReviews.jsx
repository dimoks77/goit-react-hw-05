import css from "./MovieReviews.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviewsByID } from "../../Util/API";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [ reviews, setReviews] = useState([]);

  useEffect(() => {
    const movieReviews = async () => {
      try {
        const response = await getReviewsByID(movieId);
        setReviews(response);
      } catch (error) {
        console.log(error);
      }
    };
    movieReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 && (
        <ul className={css.review}>
          {reviews.map((review) => (
            <li key={review.id}>
                <p className={css.author}>{review.author}</p>
                <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
      {reviews.length === 0 && <div className={css.noreview}>Sorry. We dont have reviews for this movie.</div>}
    </>
  );
};

export default MovieReviews;
