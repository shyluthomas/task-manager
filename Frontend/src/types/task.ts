export type task = {
  id: number;
  title: string;
  description: string;
  published: boolean;
};

export type editTask = {
  status: boolean;
  id: number | undefined;
};
export type editTaskData = {
  status: number;
  task: task | undefined;
};
