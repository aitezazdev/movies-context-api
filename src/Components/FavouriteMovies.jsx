import React, { useContext } from "react";
import { moviesContext } from "../Context/MoviesContext";

const FavouriteMovies = () => {
  const { fvtMovies, removeFromFavorites } = useContext(moviesContext);

  return (
    <div className="mt-5">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Favourite Movies</h1>
      {fvtMovies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {fvtMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white p-4 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 max-w-sm"
            >
              <div className="relative w-full h-56 overflow-hidden rounded-md">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover object-[50%_20%] hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 truncate">
                  {movie.title}
                </h3>
                <div className="flex justify-between text-sm text-gray-700 px-4">
                  <p>
                    <span className="font-semibold text-gray-900">Genre:</span>{" "}
                    {movie.genre}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900">Year:</span>{" "}
                    {movie.year}
                  </p>
                </div>
                <button
                  onClick={() => removeFromFavorites(movie.id)}
                  className="mt-4 inline-block text-sm px-5 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold rounded-lg shadow-md hover:from-red-600 hover:to-pink-700 transition-colors"
                >
                  Remove Favorite
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-20">
          <p className="text-2xl font-semibold text-gray-700">
            No favorite movies right now.
          </p>
        </div>
      )}
    </div>
  );
};

export default FavouriteMovies;
