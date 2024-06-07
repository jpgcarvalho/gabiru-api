import { NextFunction, Request, Response } from "express";

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.status || 500;
  console.log("Error: ", err.message);
  res.status(statusCode).send({
    status: statusCode,
    message: err.message,
    stack: err.stack,
  });
};
