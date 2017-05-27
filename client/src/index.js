import React from 'react';
import ReactDOM from 'react-dom';
//import thunk from 'redux-thunk';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

let store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
