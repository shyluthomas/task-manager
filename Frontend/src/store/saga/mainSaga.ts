import { taskService } from "@/services";
import * as task from "../reducers/taskReducer";
import { put, takeEvery } from "redux-saga/effects";


function* _fetchTaskList(): any {
  try {
    yield put(task.updateTaskList({ status: "loading", task: [] }));
    const taskList = yield taskService.listTask();
    yield put(task.updateTaskList({ status: "success", task: taskList }));
  } catch (e) {
    yield put(task.updateTaskList({ status: "failed", task: [] }));
  }
}


function* mainSaga() {
  yield takeEvery(task.fetchTaskList, _fetchTaskList);
}

export default mainSaga;
