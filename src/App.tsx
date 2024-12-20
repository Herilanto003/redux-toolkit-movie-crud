import MovieList from "./components/MovieList";
import MovieAdd from "./components/MovieAdd";

export default function App() {
  return (
    <div className="w-full h-screen bg-gray-950 bg-opacity-70 flex justify-center items-center">
      <div className="w-11/12 md:w-1/2 bg-gray-800 bg-opacity-90 p-4 rounded-lg">
        <h1 className="text-center font-bold text-white text-4xl mb-4 uppercase">
          Movies
        </h1>

        <MovieAdd />
        <MovieList />
      </div>
    </div>
  );
}
