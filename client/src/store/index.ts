import {createStore, combineReducers, applyMiddleware} from "redux";
import {authReducer} from "./reducers/authReducer";
import {userReducer} from "./reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))