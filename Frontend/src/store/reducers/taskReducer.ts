import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: { status: "", task: [] },
  taskCreation: { status: "", task: {} },
  dialog: { status: false, message: "" },
};

export const TaskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setNewTask: (state, action) => {
      state.taskCreation = action.payload;
    },
    fetchTaskList: () => {
    },
    updateTaskList: (state, action) => {
      state.taskList = action.payload;
    },
    setDialog: (state, action) => {
      state.dialog = action.payload;
    },
  },
});
export const {
  setDialog,
  setNewTask,
  fetchTaskList,
  updateTaskList

} = TaskSlice.actions;
export default TaskSlice.reducer;
