import React, { useContext } from "react";
import MovieItem from "./MovieItem";
import { moviesContext } from "../Context/MoviesContext";

const MoviesList = () => {
  const { movies } = useContext(moviesContext);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Movies List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieItem
            key={movie.id}
            id={movie.id}
            title={movie.title}
            genre={movie.genre}
            year={movie.year}
            image={movie.image}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
