import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { searchRobots, requestRobots } from './reducers';
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { default as registerServiceWorker } from './registerServiceWorker';

import './index.css';
import "tachyons";

//components
import App from './containers/App';
import ErrorBoundary from './components/ErrorBoundary';

const DEBUG = process.env.NODE_ENV === 'development';
const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const middleware = [
  thunkMiddleware,
  DEBUG && logger
].filter(Boolean);

const store = createStore(rootReducer, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
