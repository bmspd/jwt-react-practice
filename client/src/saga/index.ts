import {all} from "redux-saga/effects"
import {userWatcher} from "./userSaga";

export function* rootWatcher() {
  yield all([userWatcher()]) // можно еще добавить вотчеров сюда
}