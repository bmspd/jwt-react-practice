import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleWare from 'redux-saga'
import thunk from 'redux-thunk'
import { userReducer } from './reducers/userReducer'
import { authReducer } from './reducers/authReducer'
import { rootWatcher } from '../saga'

const sagaMiddleware = createSagaMiddleWare()

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)))

sagaMiddleware.run(rootWatcher)

export type RootState = ReturnType<typeof rootReducer>
