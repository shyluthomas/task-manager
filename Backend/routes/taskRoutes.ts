import express from "express";
import { createTaskSchema } from "../schemas";
import { requestValidator } from "../middlewares";
import { taskController } from "../controllers";
import { ListTaskResponseDto } from "../types/taskDto";

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
taskRoutes.patch("/:id", async (req, res) => {});

/* Delete task */
taskRoutes.delete("/", async (req, res) => {
  console.log("/delete task");
});
