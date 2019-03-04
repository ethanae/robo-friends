import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_RESOLVED,
  REQUEST_ROBOTS_REJECTED
} from "./constants";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const requestRobots = () => (dispatch) => {
  dispatch({
    type: REQUEST_ROBOTS_PENDING,
  });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(data => dispatch({
      type: REQUEST_ROBOTS_RESOLVED,
      payload: data
    }))
    .catch(err => dispatch({
      type: REQUEST_ROBOTS_REJECTED,
      payload: err
    }));
}