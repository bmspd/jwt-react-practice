import { put, takeEvery, call } from "redux-saga/effects"
import {ASYNC_GET_USERS, getUsersAction} from "../store/reducers/userReducer";

const fetchUsersFromApi = () =>  fetch('https://jsonplaceholder.typicode.com/users')

function *fetchUserWorker():any {
  const data = yield call(fetchUsersFromApi)
  const json = yield call(() => new Promise(res => res(data.json())))
  yield put(getUsersAction(json))
}

export function* userWatcher() {
  yield takeEvery(ASYNC_GET_USERS, fetchUserWorker)
}


