export type TaskDto = {
  title: string;
  description: string;
};
export type TaskGetDto = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description: string;
  published: boolean;
};

export type TaskCreateDto = TaskDto;

type Success = {
  task: TaskGetDto;
  status: number;
};
type taskAlreadyExists = {
  task: null;
  status: number;
};
export type taskError = {
  task: null;
  status: number;
};
export type createTaskResponseDto = Success | taskAlreadyExists | taskError;
export type TaskListDto = TaskGetDto[];
type SuccessList = {
  task: TaskListDto;
  status: number;
};
export type ListTaskResponseDto = SuccessList | taskError;
