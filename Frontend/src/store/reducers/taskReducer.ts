import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: { status: "", task: [] },
  taskCreation: { status: "", task: {} },
  newTask: false,
  dialog: { status: false, message: "" },
  message: { status: false, body: "" },
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
  },
});
export const {
  setDialog,
  setNewTask,
  fetchTaskList,
  updateTaskList,
  setNewTaskTrigger,
  setMessage,
} = TaskSlice.actions;
export default TaskSlice.reducer;
