import { useEffect, useState } from "react";
import css from "./MoviesPage.module.css";
import { searchMovieByName } from '../Util/API';
import { Link, useSearchParams } from "react-router-dom";
import { SearchForm } from '../components/SearchForm/SearchForm';
import { MovieList } from '../components/MovieList/MovieList';


export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [params, setParams] = useSearchParams();

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
        params.set('query', query);
        setParams(params);
    };

    return (
        <>  
            <SearchForm handleSubmit={handleSubmit} />
            {movies.length > 0 && <MovieList movies={movies} /> }
        </>
    );
}
