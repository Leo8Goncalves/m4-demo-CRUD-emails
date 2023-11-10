import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/App.error";

export const handleError = (err: unknown, req: Request, resp: Response, next: NextFunction): Response => {
  if (err instanceof AppError) {
    return resp.status(err.status).json({message: err.message})
  }

  console.log(err)
  return resp.status(500).json({message: 'Internal Server Error'})
}