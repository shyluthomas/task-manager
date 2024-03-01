import { Request, Response, NextFunction } from "express";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err.stack);
  res
    .status(err.status || 500)
    .send({ message: err.message || "Internal Server Error" });
}
