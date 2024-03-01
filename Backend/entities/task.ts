import { statusCode } from "../lib";
import { prisma } from "../lib/dbcon";
import { TaskCreateDto, createTaskResponseDto } from "../types/taskDto";

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
};
