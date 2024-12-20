import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [
    { id: 1, title: "Inception" },
    { id: 2, title: "Interstellar" },
  ],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const newMovie = { id: state.movies.length + 1, title: action.payload };
      state.movies.push(newMovie);
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;