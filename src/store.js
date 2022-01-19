import { createStore, applyMiddleware, combineReducers  } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from "./reducers/users";
import userReducer from "./reducers/user";

const rootReducer = combineReducers({users: usersReducer, user: userReducer})
const store = createStore(rootReducer, {users: [], user: {}}, applyMiddleware(thunk));

export default store;