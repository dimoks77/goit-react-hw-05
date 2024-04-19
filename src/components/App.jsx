// import css from './App.module.css'
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import NavBar from './NavBar/NavBar';
import MoviesDetailsPage from '../pages/MovieDetailsPage';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import NotFoundPage from '../pages/NotFoundPage';
import MovieCast from '../components/MovieCast/MovieCast';
import MovieReviews from '../components/MovieReviews/MovieReviews';


// const HomePage = lazy(() => import('../pages/HomePage'));
// const MoviesPage = lazy(() => import('../pages/MoviesPage'));
// const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
// const MoviesDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));

export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MoviesDetailsPage />} >
            <Route path="cast" element={<MovieCast />} />
            <Route path="review" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
};

// export default App
