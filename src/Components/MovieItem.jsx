import React, { useContext, useEffect, useState } from "react";
import { moviesContext } from "../Context/MoviesContext";
import { Link } from "react-router-dom";

const MovieItem = ({ id, title, genre, year, image }) => {
  const { fvtMovies, addToFavorites, removeFromFavorites } =
    useContext(moviesContext);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const isInFavorites = fvtMovies.some((movie) => movie.id === id);
    setIsFavorite(isInFavorites);
  }, [fvtMovies, id]);

  const handleAddToFavorites = () => {
    const movie = { id, title, genre, year, image };
    addToFavorites(movie);
  };

  const handleRemoveFromFavorites = () => {
    removeFromFavorites(id);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 max-w-sm">
      <Link to={`/movie-details/${id}`}>
        <div className="relative w-full h-56 overflow-hidden rounded-md">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-[50%_20%] hover:scale-110 transition-transform duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
        </div>
      </Link>
      <div className="mt-4 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 truncate">
          {title}
        </h3>
        <div className="flex justify-between text-sm text-gray-700 px-4">
          <p>
            <span className="font-semibold text-gray-900">Genre:</span> {genre}
          </p>
          <p>
            <span className="font-semibold text-gray-900">Year:</span> {year}
          </p>
        </div>
        {isFavorite ? (
          <button
            onClick={handleRemoveFromFavorites}
            className="mt-4 inline-block text-sm px-5 py-2 font-semibold rounded-lg shadow-md bg-red-500 hover:bg-red-600 text-white transition-colors"
          >
            Remove Favorite
          </button>
        ) : (
          <button
            onClick={handleAddToFavorites}
            className="mt-4 inline-block text-sm px-5 py-2 font-semibold rounded-lg shadow-md bg-blue-500 hover:bg-blue-600 text-white transition-colors"
          >
            Add Favorite
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieItem;
