import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const controller = new AbortController();


        async function fetchData() {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/',
                {
                    signal: controller.signal
                },
                { params: {
                    api_key: 'c1217c74d1b01a47d91dca9bef5d6b8e5',
                    lang: 'language=en-US',
                    query: query,
                    per_page: 12,
                    page: page,
                },
            });
                setMovies(response.data);
            }
            catch (error) {}
        } 
        fetchData();

        return () => {
            controller.abort();
        }
    }, []);


    return (
        <>
            <h1>Movies</h1>
            {movies.length >0 && (
                <ul>
                    {movies.map(movie => (
                        <li key={movie.id}>
                            <p>Title: {movie.title}</p>
                            <p>Desc: {movie.desc}</p>
                        </li>
                    ))}
                    </ul>
            )}
        </>
    );
  }
  