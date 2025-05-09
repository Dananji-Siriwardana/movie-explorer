import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { addToFavorites, removeFromFavorites } from '../localStorage';

const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return favorites.some(fav => fav.id === movie.id);
  });

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`/movie/${movie.id}`}>
        <CardMedia
          component="img"
          alt={movie.title}
          height="450"
          image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
      </Link>
      <CardContent>
        <Typography variant="h6">{movie.title}</Typography>
        <Typography variant="body2">{movie.release_date}</Typography>
        <Typography variant="body2">Rating: {movie.vote_average}</Typography>
        <Button onClick={handleFavoriteToggle} color={isFavorite ? 'secondary' : 'primary'}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
