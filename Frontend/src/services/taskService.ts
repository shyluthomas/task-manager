import axiosAuth, { axiosNonAuth } from "@/utils/axios";
import { Task } from "redux-saga";

const api = import.meta.env.VITE_API_BASE_URL;

export const taskService = {
  newTask: async (payload: Task): Promise<any> => {
    const response = await axiosNonAuth.post(`${api}/task`, payload);
    return response;
  },
  listTask: async (): Promise<any> => {
    const response = await axiosAuth.get(`${api}/task`);
    return response?.data.task;
  },
};
