import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { moviesContext } from '../Context/MoviesContext';

const Navbar = () => {
  const { fvtMovies } = useContext(moviesContext);

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-center items-center">
        <ul className="flex space-x-10 text-lg font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-cyan-400 transition-colors duration-300 px-4 py-2 rounded-lg"
            >
              All Movies
            </Link>
          </li>
          <li>
            <Link
              to="/favourite-movies"
              className="hover:text-cyan-400 transition-colors duration-300 px-4 py-2 rounded-lg"
            >
              Favourite Movies
              <sup className='bg-red-500 text-white text-xs font-semibold rounded-full px-[7px] py-0.5 ml-2'>
                {fvtMovies.length}
              </sup>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
