import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from '../const/user'

export default function reducer(state = {}, action) {
  const {type, payload} = action
  switch (type) {
    case FETCH_USER_START:
    console.log(112, state)
      return {
        ...state,
        fetching: true
      };

    case FETCH_USER_SUCCESS:
    console.log(7, {state})
      return {
        ...state,
        fetching: false,
        data: payload
      };

    case FETCH_USER_FAILURE:
      return {...state,
        fetching: false
      };

    default:
      return state;
  }
}