import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies, searchMovies } from '../api/api';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import { Container, Typography } from '@mui/material';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      const data = query ? await searchMovies(query) : await fetchTrendingMovies();
      setMovies(data);
      setLoading(false);
    };

    getMovies();
  }, [query]);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Movie Explorer
      </Typography>
      <SearchBar setQuery={setQuery} />
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default HomePage;
