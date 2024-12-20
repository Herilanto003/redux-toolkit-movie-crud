import { useSelector } from "react-redux";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { removeMovie } from "../services/movies/movieSlice";

export default function MovieList() {
  const movies = useSelector((state: any) => state.movies.movies);

  const dispatch = useDispatch();

  return (
    <div>
      <ul className="text-white flex flex-col space-y-2 divide-y-2 divide-gray-700">
        {movies.map((movie: any) => (
          <li key={movie.id} className="flex items-center justify-between">
            {movie.title}{" "}
            <button
              onClick={() => dispatch(removeMovie(movie.id))}
              className="text-red-500"
            >
              <FaRegTrashCan />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
