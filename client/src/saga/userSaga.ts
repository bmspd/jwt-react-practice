import { put, takeEvery, call, all, fork } from 'redux-saga/effects'
import { getUsersAction, getMoreUsers } from '../store/reducers/userReducer'
import { UserActionTypes } from '../store/types/user'

const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users')

function* fetchUserWorker(): any {
  const data = yield call(fetchUsersFromApi)
  const json = yield call(() => new Promise((res) => res(data.json())))
  yield put(getUsersAction(json))
}

export function* fetchUserWatcher() {
  yield takeEvery(UserActionTypes.ASYNC_GET_USERS, fetchUserWorker)
}

function* fetchMoreUserWorker(): any {
  const data = yield call(fetchUsersFromApi)
  const json = yield call(() => new Promise((res) => res(data.json())))
  yield put(getMoreUsers(json))
}

export function* fetchMoreUserWatcher() {
  yield takeEvery(UserActionTypes.ASYNC_LOAD_MORE_USERS, fetchMoreUserWorker)
}

export function* userRootWatcher() {
  yield all([fork(fetchUserWatcher), fork(fetchMoreUserWatcher)])
}
