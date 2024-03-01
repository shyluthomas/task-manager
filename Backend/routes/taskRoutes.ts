import express from "express";
import { createTaskSchema, getTaskSchema, updateTaskSchema } from "../schemas";
import { requestValidator } from "../middlewares";
import { taskController } from "../controllers";
import { ListTaskResponseDto, TaskDto } from "../types/taskDto";

export const taskRoutes = express.Router();

/* getting tasks */
taskRoutes.get("/", async (req, res) => {
  const response: ListTaskResponseDto = await taskController.getTask();
  res.status(response.status).send(response);
});

/* getting task by ID */
taskRoutes.get("/:id", async (req, res) => {});

/* Create task */
taskRoutes.post("/", requestValidator(createTaskSchema), async (req, res) => {
  const response = await taskController.createTask(req.body);
  if (response) {
    res.status(response.status).send(response);
  }
});

/* Update task by ID */
taskRoutes.patch(
  "/:id",
  requestValidator(updateTaskSchema),
  async (req, res) => {
    const id = req.params.id as string;
    const data = req.body as TaskDto;
    const response = await taskController.updateTask(parseInt(id, 10), data);
    res.status(response.status).send(response);
  }
);

/* Delete task */
taskRoutes.delete("/:id", requestValidator(getTaskSchema), async (req, res) => {
  const id = req.params.id as string;
  const response = await taskController.deleteTask(parseInt(id, 10));
  res.status(response.status).send(response);
});
