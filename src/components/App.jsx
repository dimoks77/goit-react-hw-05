import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import NavBar from "./NavBar/NavBar";

const HomePage = lazy(() => import("../pages/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const MoviesDetailsPage = lazy(() => import("../pages/MovieDetailsPage"));
const MovieCast = lazy(() => import("../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../components/MovieReviews/MovieReviews"));

export const App = () => {
  return (
    <>
      <NavBar />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="review" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

// export default App
