import { put, takeEvery, call } from "redux-saga/effects"
import {getUsersAction} from "../store/reducers/userReducer";
import {UserActionTypes} from "../store/types/user";

const fetchUsersFromApi = () =>  fetch('https://jsonplaceholder.typicode.com/users')

function *fetchUserWorker():any {
  const data = yield call(fetchUsersFromApi)
  const json = yield call(() => new Promise(res => res(data.json())))
  yield put(getUsersAction(json))
}

export function* userWatcher() {
  yield takeEvery(UserActionTypes.ASYNC_GET_USERS, fetchUserWorker)
}


