import {createStore, combineReducers, applyMiddleware} from "redux";
import {authReducer} from "./reducers/authReducer";
import {userReducer} from "./reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleWare from 'redux-saga'
import thunk from "redux-thunk";
import {rootWatcher} from "../saga";

const sagaMiddleware = createSagaMiddleWare()

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)))

sagaMiddleware.run(rootWatcher)


export type RootState = ReturnType<typeof rootReducer>