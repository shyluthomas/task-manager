import express from "express";
import { createTaskSchema } from "../schemas";
import { requestValidator } from "../middlewares";
import { taskController } from "../controllers";

export const taskRoutes = express.Router();

/* getting Events */
taskRoutes.get("/", async (req, res) => {});

/* getting Event by ID */
taskRoutes.get("/:id", async (req, res) => {});

/* Create Events */
taskRoutes.post("/", requestValidator(createTaskSchema), async (req, res) => {
  const response = await taskController.createTask(req.body);
  if (response) {
    res.status(response.status).send(response);
  }
});

/* Update Events by ID */
taskRoutes.patch("/:id", async (req, res) => {});

/* Delete Events */
taskRoutes.delete("/", async (req, res) => {
  console.log("/delete task");
});
