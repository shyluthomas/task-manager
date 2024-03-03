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

function* _setDeleteTask(action: any): any {
  try {
    const { payload } = action;
    const taskDelete = yield taskService.deleteTask(payload);
    if (taskDelete) {
      yield put(task.fetchTaskList());
      yield put(
        task.setMessage({ status: true, body: "Task has been Deleted.." })
      );
      yield put(task.setConfirmationSate({ status: false, action: undefined }));
    }
  } catch (e) {
    yield put(task.setMessage({ status: false, body: "Some network error.." }));
    console.log(e);
  }
}

function* _setTaskSearch(action: any): any {
  try {
    const searchText = action.payload;
    let taskList;
    if (searchText) {
      taskList = yield taskService.searchTask(searchText);
      yield put(
        task.updateTaskList({ status: "success", task: taskList.task })
      );
    } else {
      taskList = yield taskService.listTask();
      yield put(task.updateTaskList({ status: "success", task: taskList }));
    }
  } catch (e) {
    yield put(task.updateTaskList({ status: "failed", task: [] }));
  }
}

function* mainSaga() {
  yield takeEvery(task.fetchTaskList, _fetchTaskList);
  yield takeEvery(task.setNewTask, _setNewTask);
  yield takeLatest(task.setEditTask, _setEditTask);
  yield takeLatest(task.updateTask, _updateTask);
  yield takeLatest(task.setDeleteTask, _setDeleteTask);
  yield takeLatest(task.setTaskSearch, _setTaskSearch);
}

export default mainSaga;
