import { taskEntity } from "../entities/task";
import { TaskCreateDto, createTaskResponseDto } from "../types/taskDto";

export const taskController = {
  createTask: async (task: TaskCreateDto): Promise<createTaskResponseDto> => {
    let response: createTaskResponseDto = { task: null, status: 400 };
    try {
      const data: createTaskResponseDto = await taskEntity.createTask(task);
      response = { task: data.task, status: data.status };
    } catch (e) {
      return { task: null, status: 400 };
    }
    return response;
  },
};
