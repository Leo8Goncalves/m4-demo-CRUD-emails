import { Router } from "express";
import { createUserController, deleteUserController, readAllUsersController, readUserByIdController, updateUserController } from "../controllers/user.controller";

export const userRouter: Router = Router()

userRouter.post('/', createUserController)
userRouter.get('/', readAllUsersController)
userRouter.get('/:id', readUserByIdController)
userRouter.patch('/:id', updateUserController)
userRouter.delete('/:id', deleteUserController)