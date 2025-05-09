import { Grid, Typography } from '@mui/material';

function TrendingSection() {
  const placeholderMovies = [
    { id: 1, title: 'Movie 1', year: '2023', rating: '7.5' },
    { id: 2, title: 'Movie 2', year: '2022', rating: '8.0' },
    { id: 3, title: 'Movie 3', year: '2021', rating: '6.5' },
  ];

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Trending Movies
      </Typography>
      <Grid container spacing={2}>
        {placeholderMovies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} key={movie.id}>
            <div style={{ border: '1px solid #ccc', padding: '10px' }}>
              <Typography variant="h6">{movie.title}</Typography>
              <Typography>Year: {movie.year}</Typography>
              <Typography>Rating: {movie.rating}</Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default TrendingSection;