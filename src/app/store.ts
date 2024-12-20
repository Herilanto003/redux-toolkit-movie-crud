import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../services/movies/movieSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});
