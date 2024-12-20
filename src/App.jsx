import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Page/HomePage";
import FavouriteMovies from "./Components/FavouriteMovies";
import MovieDetails from "./Components/MovieDetails";

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourite-movies" element={<FavouriteMovies />} />
        <Route path="/movie-details/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
