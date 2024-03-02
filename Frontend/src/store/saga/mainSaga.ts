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

function* _setNewTask(action: any): any {
  try {
    const { payload } = action;
    const taskList = yield taskService.newTask(payload);
    if (taskList) {
      yield put(task.fetchTaskList());
      yield put(task.setNewTaskTrigger(false));
      yield put(
        task.setMessage({ status: true, body: "New Task has been added.." })
      );
    }
  } catch (e) {
    yield put(task.setMessage({ status: false, body: "Some network error.." }));
    console.log(e);
  }
}

function* mainSaga() {
  yield takeEvery(task.fetchTaskList, _fetchTaskList);
  yield takeEvery(task.setNewTask, _setNewTask);
}

export default mainSaga;
