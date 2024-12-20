import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addMovie } from "../services/movies/movieSlice";
import { useState } from "react";

export default function MovieAdd() {
  const [movieTitle, setMovieTitle] = useState("");
  const dispatch = useDispatch();

  const handleAddMovie = () => {
    if (movieTitle === "") return;
    dispatch(addMovie(movieTitle));
    setMovieTitle("");
  };

  return (
    <div className="flex items-center space-x-2 mb-4">
      <input
        type="text"
        name="title"
        id="title"
        onChange={(e) => setMovieTitle(e.target.value)}
        value={movieTitle}
        className="px-2 py-1 rounded-lg bg-gray-700 bg-opacity-50 text-white grow flex-1 outline-none"
        placeholder="Enter movie title"
      />
      <button
        onClick={handleAddMovie}
        className="px-4 py-1 bg-cyan-500 rounded-lg text-white flex items-center space-x-1"
      >
        <FaPlus />
        <span>Add Movie</span>
      </button>
    </div>
  );
}
