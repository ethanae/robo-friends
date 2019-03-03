import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { searchRobots, requestRobots } from './reducers';
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import "tachyons";

//components
import App from './containers/App';

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
