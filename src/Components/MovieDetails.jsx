import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { moviesContext } from "../Context/MoviesContext";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movies } = useContext(moviesContext);
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const selectedMovie = movies.find((movie) => movie.id === parseInt(id));
    setMovieDetails(selectedMovie);
  }, [id, movies]);

  if (!movieDetails) {
    return (
      <div className=" bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Loading movie details...</div>
      </div>
    );
  }

  return (
    <div className=" bg-gray-50 flex items-center justify-center p-2">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row max-w-4xl w-full">
        <div className="md:w-2/5">
          <img
            src={movieDetails.image}
            alt={movieDetails.title}
            className="w-full h-full object-cover"
            style={{ height: '500px' }}
          />
        </div>

        <div className="md:w-3/5 p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {movieDetails.title}
          </h1>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-gray-600 font-medium w-24">Genre:</span>
              <span className="text-gray-800">{movieDetails.genre}</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-gray-600 font-medium w-24">Year:</span>
              <span className="text-gray-800">{movieDetails.year}</span>
            </div>
            
            <div className="pt-4">
              <h2 className="text-gray-600 font-medium mb-2">Description:</h2>
              <p className="text-gray-800 leading-relaxed">
                {movieDetails.description}
              </p>
            </div>
            <button onClick={() => navigate("/")} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded">Go Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;