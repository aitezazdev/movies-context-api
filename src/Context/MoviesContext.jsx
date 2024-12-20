import React, { createContext, useState } from "react";

export const moviesContext = createContext();

const MoviesContext = ({ children }) => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Shawshank Redemption",
      genre: "Drama",
      year: 1994,
      image: "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      description: "Imprisoned for a crime he didn't commit, Andy Dufresne forms an unlikely bond with fellow inmate Red. Through acts of courage and hope, Andy discovers a way to reclaim his freedom and his sense of self in the oppressive Shawshank prison."
    },
    {
      id: 2,
      title: "The Godfather",
      genre: "Crime",
      year: 1972,
      image: "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      description: "The epic tale of the Corleone family, tracing their rise to power in the New York Mafia. As the patriarch, Vito Corleone, faces threats from rival families, his youngest son Michael is drawn into the family business, changing the course of his life forever."
    },
    {
      id: 3,
      title: "The Dark Knight",
      genre: "Action",
      year: 2008,
      image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
      description: "With Gotham City under siege, Batman faces his most cunning and ruthless adversary yet: the Joker. As chaos ensues, Batman is pushed to his moral and physical limits in a desperate attempt to save his city from total destruction."
    },
    {
      id: 4,
      title: "Pulp Fiction",
      genre: "Crime",
      year: 1994,
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Pulp_Fiction_%281994%29_poster.jpg/220px-Pulp_Fiction_%281994%29_poster.jpg",
      description: "A mesmerizing anthology of interconnected stories, Pulp Fiction takes you into the gritty and unpredictable lives of mobsters, small-time criminals, and a mysterious briefcase that ties it all together in Quentin Tarantino’s signature style."
    },
    {
      id: 5,
      title: "Forrest Gump",
      genre: "Drama",
      year: 1994,
      image: "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_.jpg",
      description: "The heartwarming story of Forrest Gump, a man with a kind heart and a simple mind, who unwittingly becomes a part of significant historical moments while chasing his one true love, Jenny, and discovering the value of persistence and destiny."
    },
    {
      id: 6,
      title: "Inception",
      genre: "Sci-Fi",
      year: 2010,
      image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
      description: "Dom Cobb, a skilled thief specializing in stealing secrets from deep within the subconscious during dreams, is offered a chance at redemption. His task: plant an idea into a target's mind. But this dangerous mission pushes the limits of reality and dreams."
    },
    {
      id: 7,
      title: "Fight Club",
      genre: "Drama",
      year: 1999,
      image: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_.jpg",
      description: "Disillusioned with consumer culture, an unnamed narrator forms an underground fight club with the mysterious and charismatic Tyler Durden. As the club grows, it spirals into chaos, forcing the narrator to confront his own fractured psyche."
    },
    {
      id: 8,
      title: "The Matrix",
      genre: "Sci-Fi",
      year: 1999,
      image: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      description: "Neo, a computer hacker, discovers the truth about his reality: it's a simulation controlled by machines. Joining a rebellion, he learns he might be 'The One,' destined to free humanity from their artificial overlords."
    },
    {
      id: 9,
      title: "Interstellar",
      genre: "Sci-Fi",
      year: 2014,
      image: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      description: "When Earth's survival is at risk, a team of astronauts travels through a mysterious wormhole to find a new home for humanity, facing challenges that test the limits of science, humanity, and love across time and space."
    },
    {
      id: 10,
      title: "The Avengers",
      genre: "Action",
      year: 2012,
      image: "https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      description: "Earth’s mightiest heroes must unite to stop Loki, the Norse god of mischief, and his alien army from enslaving the planet. A thrilling action-packed ride full of teamwork, humor, and epic battles."
    }
  ]);  
  
  const [fvtMovies, setFvtMovies] = useState([]);

  const addToFavorites = (movie) => {
    const isMovieInFavorites = fvtMovies.some(m => m.id === movie.id);
    if (!isMovieInFavorites) {
      setFvtMovies((prev) => [...prev, movie]);
    }   
  };

  const removeFromFavorites = (movieId) => {
    setFvtMovies((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  return (
    <moviesContext.Provider value={{movies, fvtMovies, setFvtMovies, addToFavorites, removeFromFavorites }}>
      {children}
    </moviesContext.Provider>
  );
};

export default MoviesContext;
