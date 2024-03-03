import { statusCode } from "../lib";
import { prisma } from "../lib/dbcon";
import {
  TaskCreateDto,
  TaskListDto,
  createTaskResponseDto,
} from "../types/taskDto";

export const taskEntity = {
  createTask: async (task: TaskCreateDto): Promise<createTaskResponseDto> => {
    let result;
    let status = statusCode.HTTP_SUCESS_CREATED;
    try {
      result = await prisma.task.create({
        data: {
          title: task.title,
          description: task.description,
          published: true,
        },
      });
    } catch (e) {
      result = null;
      status = statusCode.HTTP_NOTFOUND;
      console.log("error", e);
    }

    return { task: result, status: status };
  },
  getTasks: async (): Promise<TaskListDto | null> => {
    try {
      const tasks = await prisma.task.findMany({
        orderBy: {
          id: "asc",
        },
      });
      return tasks;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
  updateTask: async (
    id: number,
    event: TaskCreateDto
  ): Promise<createTaskResponseDto> => {
    let result;
    let status = statusCode.HTTP_SUCESS_CREATED;
    try {
      result = await prisma.task.update({
        where: {
          id: id,
        },
        data: {
          title: event.title,
          description: event.description,
        },
      });
    } catch (e) {
      result = null;
      status = statusCode.HTTP_NOTFOUND;
    }

    return { task: result, status: status };
  },
  deleteTask: async (id: number): Promise<createTaskResponseDto> => {
    let result;
    let status = statusCode.HTTP_SUCESS_CREATED;
    try {
      result = await prisma.task.findUnique({
        where: {
          id: id,
        },
      });
      if (result) {
        await prisma.task.delete({
          where: {
            id: id,
          },
        });
      } else {
        status = statusCode.HTTP_NOTFOUND;
      }
    } catch (e) {
      result = null;
      status = statusCode.HTTP_NOTFOUND;
    }

    return { task: result, status: status };
  },
  getTaskById: async (id: number): Promise<createTaskResponseDto> => {
    let result;
    let status = statusCode.HTTP_SUCESS_CREATED;
    try {
      result = await prisma.task.findUnique({
        where: {
          id: id,
        },
      });
    } catch (e) {
      result = null;
      status = statusCode.HTTP_NOTFOUND;
    }
    return { task: result, status: status };
  },
  getTaskBySearch: async (search: string): Promise<TaskListDto | null> => {
    try {
      const tasks = await prisma.task.findMany({
        where: {
          OR: [
            {
              title: {
                startsWith: search,
              },
            },
            {
              description: {
                startsWith: search,
              },
            },
          ],
        },
        orderBy: {
          id: "asc",
        },
      });
      return tasks;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
  getTaskBySort: async (
    field: string,
    sortType: string
  ): Promise<TaskListDto | null> => {
    try {
      const tasks = await prisma.task.findMany({
        orderBy: {
          [field]: sortType,
        },
      });
      return tasks;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
};
