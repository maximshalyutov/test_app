import { Octokit } from "@octokit/core"

import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from '../const/user'

const octokit = new Octokit({ auth: `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` });

function fetchUserStart() {
  return { 
      type: FETCH_USER_START,
  };
}

function fetchUserSuccess(user) {
  return { 
      type: FETCH_USER_SUCCESS,
      payload: user
  };
}

function fetchUserFailure(error) {
  return { 
      type: FETCH_USER_FAILURE,
  };
}

export const fetchUser = (username) => async dispatch => {
  dispatch(fetchUserStart())
  try {
    const response = await octokit.request(`GET /users/${username}`)
    dispatch(fetchUserSuccess(response.data))
  } catch (err) {
    dispatch(fetchUserFailure(err))
  }
} 