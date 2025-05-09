export const addToFavorites = (movie) => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites.push(movie);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const removeFromFavorites = (movieId) => {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites = favorites.filter(movie => movie.id !== movieId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const getFavorites = () => {
  return JSON.parse(localStorage.getItem('favorites')) || [];
};
