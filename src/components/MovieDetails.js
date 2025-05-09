import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api/api';
import { Container, Typography, Card, CardMedia, CardContent } from '@mui/material';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const details = await fetchMovieDetails(id);
      setMovie(details);
    };

    getMovieDetails();
  }, [id]);

  if (!movie) return <Typography>Loading...</Typography>;

  return (
    <Container>
      <Card>
        <CardMedia
          component="img"
          alt={movie.title}
          height="500"
          image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
        <CardContent>
          <Typography variant="h4">{movie.title}</Typography>
          <Typography variant="h6">Release Date: {movie.release_date}</Typography>
          <Typography variant="body1">{movie.overview}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default MovieDetails;
