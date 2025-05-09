import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import MovieCard from '../components/MovieCard';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  // Retrieve favorites from localStorage
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>My Favorites</Typography>
      <Grid container spacing={3}>
        {favorites.length === 0 ? (
          <Typography>No favorite movies added yet!</Typography>
        ) : (
          favorites.map((movie) => (
            <Grid item xs={12} sm={6} md={4} key={movie.id}>
              <MovieCard movie={movie} />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default FavoritesPage;
