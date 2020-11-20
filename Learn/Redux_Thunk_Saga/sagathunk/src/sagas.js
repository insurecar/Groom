import axios from "axios";
import { LOAD_DATA } from "./actions";
import { put, takeEvery, call } from "redux-saga/effects";
import { loadData } from "./actions";

const fetchData = () => axios.get("https://jsonplaceholder.typicode.com/todos/");

function* workedLoadData() {
  const data = yield call(fetchData);

  yield put(loadData(data));
}

export function* watchLoadData() {
  yield takeEvery(LOAD_DATA, workedLoadData);
}
