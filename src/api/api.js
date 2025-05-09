import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_TMDB_API_KEY, // Replace with your TMDb API Key
    language: 'en-US',
  },
});

export const fetchTrendingMovies = async () => {
  const response = await api.get('/trending/movie/day');
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await api.get('/search/movie', {
    params: { query },
  });
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await api.get(`/movie/${movieId}`);
  return response.data;
};
