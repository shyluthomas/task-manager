import { taskEntity } from "../entities/task";
import { statusCode } from "../lib";
import {
  ListTaskResponseDto,
  TaskCreateDto,
  TaskListDto,
  createTaskResponseDto,
} from "../types/taskDto";

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
  getTask: async (): Promise<ListTaskResponseDto> => {
    const response: TaskListDto | null = await taskEntity.getTasks();
    if (!response) {
      return { status: statusCode.HTTP_NOTFOUND, task: null };
    }
    return { status: statusCode.HTTP_SUCESS, task: response };
  },
  updateTask: async (id: number, data: any): Promise<createTaskResponseDto> => {
    const response: createTaskResponseDto = await taskEntity.updateTask(
      id,
      data
    );
    if (!response) {
      return { status: statusCode.HTTP_NOTFOUND, task: null };
    }
    return { status: statusCode.HTTP_SUCESS, task: response.task };
  },
  deleteTask: async (id: number): Promise<createTaskResponseDto> => {
    const response: createTaskResponseDto = await taskEntity.deleteTask(id);
    if (!response) {
      return { status: statusCode.HTTP_NOTFOUND, task: null };
    }
    return { status: response.status, task: response.task };
  },
  getTaskById: async (id: number): Promise<createTaskResponseDto> => {
    const response: createTaskResponseDto | null = await taskEntity.getTaskById(
      id
    );
    if (!response) {
      return { status: statusCode.HTTP_NOTFOUND, task: null };
    }
    return { status: statusCode.HTTP_SUCESS, task: response.task };
  },
  getTaskBySearch: async (search: string): Promise<ListTaskResponseDto> => {
    const response: TaskListDto | null = await taskEntity.getTaskBySearch(
      search
    );
    if (!response) {
      return { status: statusCode.HTTP_NOTFOUND, task: null };
    }
    return { status: statusCode.HTTP_SUCESS, task: response };
  },
  getTaskBySort: async (
    field: string,
    sortType: string
  ): Promise<ListTaskResponseDto> => {
    const response: TaskListDto | null = await taskEntity.getTaskBySort(
      field,
      sortType
    );
    if (!response) {
      return { status: statusCode.HTTP_NOTFOUND, task: null };
    }
    return { status: statusCode.HTTP_SUCESS, task: response };
  },
};
