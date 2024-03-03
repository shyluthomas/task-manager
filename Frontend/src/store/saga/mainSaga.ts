import { taskService } from "@/services";
import * as task from "../reducers/taskReducer";
import { put, takeEvery, takeLatest } from "redux-saga/effects";

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

function* _setEditTask(action: any): any {
  try {
    const { payload } = action;
    if (payload.id) {
      const taskList = yield taskService.getTaskbyId(payload.id);
      if (taskList) {
        yield put(task.updateTaskData(taskList));
      }
    } else {
      yield put(task.updateTaskData({ status: 0, task: null }));
    }
  } catch (e) {
    yield put(task.setMessage({ status: false, body: "Some network error.." }));
    console.log(e);
  }
}

function* _updateTask(action: any): any {
  try {
    const { payload } = action;
    const taskUpdate = yield taskService.updateTask(payload.id, payload.task);
    if (taskUpdate) {
      yield put(task.fetchTaskList());
      yield put(task.setEditTask({ status: false, id: undefined }));
      yield put(
        task.setMessage({ status: true, body: "Task has been Updated.." })
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
  yield takeLatest(task.setEditTask, _setEditTask);
  yield takeLatest(task.updateTask, _updateTask);
}

export default mainSaga;
