import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_RESOLVED,
  REQUEST_ROBOTS_REJECTED,
  BASE_API_URL
} from "./constants";

import { getUsers } from './registerServiceWorker';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const requestRobots = () => async (dispatch) => {
  dispatch({
    type: REQUEST_ROBOTS_PENDING,
  });

  const users = await getUsers(BASE_API_URL).catch(err => {
    dispatch({
      type: REQUEST_ROBOTS_REJECTED,
      payload: err
    });
  });
  
  dispatch({
    type: REQUEST_ROBOTS_RESOLVED,
    payload: users
  });
}