import { Request, Response, NextFunction } from "express";

export interface AppError extends Error {
  statusCode?: number;
}

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const statusCode = err.statusCode ?? 500;

  console.error({
    message: err.message,
    stack: err.stack,
    method: req.method,
    url: req.originalUrl,
    ip: req.ip,
    time: new Date().toISOString(),
  });

  const response: Record<string, unknown> = {
    success: false,
    message:
      process.env.NODE_ENV === "production" && statusCode === 500
        ? "Something went wrong."
        : err.message,
  };

  if (process.env.NODE_ENV !== "production") {
    response.stack = err.stack;
  }

  res.status(statusCode).json(response);
};