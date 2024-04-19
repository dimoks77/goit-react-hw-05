import css from "./MovieCast.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCastByID } from "../../Util/API";
import nophoto from "../../images/nophoto.png";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const movieCast = async () => {
      try {
        const response = await getCastByID(movieId);
        setCast(response);
      } catch (error) {
        console.log(error);
      }
    };
    movieCast();
  }, [movieId]);

  return (
    <>
      {cast.length > 0 && (
        <ul className={css.cast}>
          {cast.map((actor) => (
            <li key={actor.id}>
              <img
                className={css.photo}
                src={
                  actor.profile_path ? `https://image.tmdb.org/t/p/w300${actor.profile_path}` : `${nophoto}`
                }
                alt={actor.original_name}
              />
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </li>
          ))}
        </ul>
      )}
      {cast.length === 0 && <p>We dont have any cast for this movie.</p>}
    </>
  );
};

export default MovieCast;
