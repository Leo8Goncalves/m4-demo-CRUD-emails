import { Request, Response } from "express";
import { User } from "../entities/user.entity";
import { DeleteUserService, UpdateUserService, createUserService, readAllUsersService, readUserByIdService } from "../services/user.service";

export const createUserController = async (req: Request, resp: Response): Promise<Response> => {
  const user: User = await createUserService(req.body)

  return resp.status(201).json(user)
}

export const readAllUsersController = async (req: Request, resp: Response): Promise<Response> => {
  const users: User[] = await readAllUsersService()

  return resp.status(200).json(users)
}

export const readUserByIdController = async (req: Request, resp: Response): Promise<Response> => {
  const user: User = await readUserByIdService(Number(req.params.id))

  return resp.status(200).json(user)
}

export const updateUserController = async (req: Request, resp: Response): Promise<Response> => {
  const user: User = await UpdateUserService(Number(req.params.id), req.body)

  return resp.status(200).json(user)
}

export const deleteUserController = async (req: Request, resp: Response): Promise<Response> => {
  await DeleteUserService(Number(req.params.id))

  return resp.status(204).json()
}