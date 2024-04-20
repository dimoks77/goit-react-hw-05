import { Link, useLocation } from 'react-router-dom';
import css from "./MovieList.module.css";

export const MovieList = ( {movies} ) => {
    const location = useLocation();
    console.log(movies);
  return (
    <>
      <ul className={css.list}>
        {movies.length > 0 &&
          movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.original_title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MovieList;
