import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: { status: "", task: [] },
  taskCreation: { status: "", task: {} },
  newTask: false,
  dialog: { status: false, message: "" },
  message: { status: false, body: "" },
  editTaskFetch: { id: undefined, status: false },
  editTakData: {
    status: 0,
    task: { published: false, title: "", description: "", id: 0 },
  },
  editTask: { status: false, task: undefined },
  confirmationSate: { status: false, messgae: "", okAction: {} },
  deleteTask: { status: false, id: undefined },
};

export const TaskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setNewTaskTrigger: (state, action) => {
      state.newTask = action.payload;
    },
    setNewTask: (state, action) => {
      state.taskCreation = action.payload;
    },
    fetchTaskList: () => {},
    updateTaskList: (state, action) => {
      state.taskList = action.payload;
    },
    setDialog: (state, action) => {
      state.dialog = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setEditTask: (state, action) => {
      state.editTaskFetch = action.payload;
    },
    updateTaskData: (state, action) => {
      state.editTakData = action.payload;
    },
    updateTask: (state, action) => {
      state.editTask = action.payload;
    },
    setConfirmationSate: (state, action) => {
      state.confirmationSate = action.payload;
    },
    setDeleteTask: (state, action) => {
      state.deleteTask = action.payload;
    },
  },
});
export const {
  setDialog,
  setNewTask,
  fetchTaskList,
  updateTaskList,
  setNewTaskTrigger,
  setMessage,
  setEditTask,
  updateTaskData,
  updateTask,
  setConfirmationSate,
  setDeleteTask,
} = TaskSlice.actions;
export default TaskSlice.reducer;
