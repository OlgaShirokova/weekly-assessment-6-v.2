import { addEvent } from './actions';

export const postEvent = () => {
  return (dispatch) => {
    fetch('http://localhost:3001/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        date: this.state.date,
        venue: this.state.venue
      })
    })
    .then((data) => {
      dispatch(addEvent(data));
    });
  }
}

// export const parseMovies = (data) => {
//   return data.map(element => {
//     return {
//       'id': element.id,
//       'path': element.poster_path,
//       'seen': false
//     };
//   });
// };
