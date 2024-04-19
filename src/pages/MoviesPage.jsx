import { useEffect, useState } from "react";
import css from "./MoviesPage.module.css";
import { searchMovieByName } from '../Util/API';
import { Link } from "react-router-dom";


export default function MoviesPage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
          try {
            const data = await searchMovieByName('');
            setMovies(data.results);
          } catch (error) {
            console.error("Error fetching movies:", error);
          }
        };
    
        fetchMovies();
      }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const query = event.target.elements.query.value.trim();
        if (query === "") {
            console.log("Enter text for search!");
            return;
        }
        try {
            const data = await searchMovieByName(query);
            setMovies(data.results);
        } catch (error) {
            console.error("Error searching movies:", error);
        }
        event.target.reset();
    };

    return (
        <>
            <form className={css.form} onSubmit={handleSubmit}>
                <input className={css.input} autoComplete="off" autoFocus type="text" name="query" placeholder="" />
                <button type="submit" className={css.btn}>
                    Search
                </button>
            </form>

            {movies.length > 0 && (
                <ul className={css.list}>
                    {movies.map((movie) => (
                        <li key={movie.id}>
                            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                                {movie.original_title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
