const API_KEY = "2c9187e";
const BASE_URL = "https://www.omdbapi.com/";

// Simulated "popular" movies using title search
export const getPopularMovies = async () => {
  const popularTitles = [
    "The Dark Knight",
    "Inception",
    "Interstellar",
    "Avengers",
    "Titanic",
    "The Matrix"
  ];

  const moviePromises = popularTitles.map(async (title) => {
    const response = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(title)}`
    );
    return await response.json();
  });

  const movies = await Promise.all(moviePromises);
  return movies.filter((movie) => movie.Response === "True");
};

// Search movies by title keyword
export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.Search || [];
};
