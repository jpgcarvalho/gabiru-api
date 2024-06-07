import { NextFunction, Request, Response } from "express";

export const streamMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Caso você esteja fazendo o stream de uma reposta
  if (res.headersSent) {
    return next(error);
  }
};
