import { z } from "zod";

export const createTaskSchema = z.object({
  body: z.object({
    title: z.string({ required_error: "title is required" }),
    description: z.string({ required_error: "description is required" }),
  }),
});

export const updateTaskSchema = z.object({
  params: z.object({
    id: z.string({ required_error: "id required" }),
  }),
  body: z.object({
    title: z.string({ required_error: "title is required" }).optional(),
    description: z
      .string({ required_error: "description is required" })
      .optional(),
  }),
});

export const getTaskSchema = z.object({
  params: z.object({
    id: z.string({ required_error: "Task id is required" }),
  }),
});
