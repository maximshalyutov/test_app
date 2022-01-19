import {
  FETCH_USERS_START, 
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from '../const/users'

export default function reducer(state = [], action) {
  const {type, payload} = action
  switch (type) {
    case FETCH_USERS_START:
      return {
        ...state,
        fetching: true
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: payload
      };

    case FETCH_USERS_FAILURE:
      return {...state,
        fetching: false
      };

    default:
      return state;
  }
}