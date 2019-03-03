import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_RESOLVED,
  REQUEST_ROBOTS_REJECTED
} from "./constants";

const initialStateSearch = {
  searchField: ''
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
}

const initialStateRobots = {
  robots: [],
  isPending: false,
  error: ''
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_ROBOTS_RESOLVED:
      return { ...state, robots: action.payload, isPending: false };
    case REQUEST_ROBOTS_REJECTED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
}