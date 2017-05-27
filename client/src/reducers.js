import { combineReducers } from 'redux';
import { addEvent } from './actions';

let nextId=0;

const events = (state = [], action) => {
  if (action.type === 'ADD_EVENT') {
    nextId += 1;
    return [...state, {id: nextId, title: action.title, date: action.date, venue: action.venue}]
    //action.event?
    // return {
    //
    // };
  }
  console.log(state);
  return state;
};

export default events;
