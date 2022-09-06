import { all } from 'redux-saga/effects'
import { userRootWatcher } from './userSaga'

export function* rootWatcher() {
  yield all([userRootWatcher()]) // можно еще добавить вотчеров сюда
}
