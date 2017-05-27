import { addMovies } from './actions';
import { markAsSeen } from './actions';
// import { fetchMovies } from './moviesAPI';

const movies = (state = [], action) => {
  switch (action.type) {
  case 'ADD_MOVIES':
    return state.concat(action.movies);
  case 'MARK_AS_SEEN':
    return state.concat(!action.movies);
  default:
    return state;
  }
};

export default movies;
