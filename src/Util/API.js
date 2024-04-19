import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
// const api_key = "af0d5f243de6f7a5bfa482911cb42a9e";
const api_key = "c1217c74d1b01a47d91dca9bef5d6b8e";
const language = "language=en-US";

export const getTrends = async ({ abortController }) => {
  const response = await axios.get("/trending/movie/day", {
    signal: abortController.signal,
    params: {
      language,
      api_key,
    },
  });
  return response.data.results;
};

export const getMovieByID = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`, {
    params: {
      language,
      api_key,
    },
  });
  return response.data;
};

export const searchMovieByName = async (movieName) => {
  const response = await axios.get(`/search/movie`, {
    params: {
      query: movieName,
      language,
      api_key,
    },
  });
  return response.data;
};

export const getCastByID = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`, {
    params: {
      language,
      api_key,
    },
  });
  return response.data.cast;
};

export const getReviewsByID = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews`, {
    params: {
      language,
      api_key,
    },
  });
  return response.data.results;
};
