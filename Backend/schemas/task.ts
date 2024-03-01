import { z } from "zod";

export const createTaskSchema = z.object({
  body: z.object({
    title: z.string({ required_error: "title is required" }),
    description: z.string({ required_error: "description is required" }),
  }),
});

export const getEventSchema = z.object({
  params: z.object({
    id: z.number({ required_error: "Task id is required" }),
  }),
});
