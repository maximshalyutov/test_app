import { Octokit } from "@octokit/core"

import {
  FETCH_USERS_START, 
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from '../const/users'

const octokit = new Octokit({ auth: `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` });

function fetchUsersStart() {
  return { 
      type: FETCH_USERS_START,
  };
}

function fetchUsersSuccess(users) {
  return { 
      type: FETCH_USERS_SUCCESS,
      payload: users
  };
}

function fetchUsersFailure(error) {
  return { 
      type: FETCH_USERS_FAILURE,
  };
}

export const fetchUsers = () => async dispatch => {
  dispatch(fetchUsersStart())
  try {
    const response = await octokit.request('GET /users?per_page=10')
    dispatch(fetchUsersSuccess(response.data))
  } catch (err) {
    dispatch(fetchUsersFailure(err))
  }
} 
