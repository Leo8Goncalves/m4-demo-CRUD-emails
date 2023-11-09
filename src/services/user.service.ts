import { User } from "../entities/user.entity";
import { AppError } from "../errors/App.error";
import { userRepo } from "../repositories";

export const createUserService = async (data: Omit<User, 'id'>): Promise<User> => {
  const user: User | null = await userRepo.findOneBy({email: data.email})

  if(user) throw new AppError('Email already exists', 409)

  return await userRepo.save(data)
}

export const readAllUsersService =async (): Promise<User[]> => {
  return await userRepo.find()
}

export const readUserByIdService =async (id: number): Promise<User> => {
  const user = await userRepo.findOneBy({id})

  if(!user) throw new AppError('User not found', 404)

  return user
}

export const UpdateUserService =async (id: number, data: Partial<User>): Promise<User> => {
  const user = await userRepo.findOneBy({id})

  if(!user) throw new AppError('User not found', 404)

  return userRepo.save({...user, ...data})
}

export const DeleteUserService =async (id: number): Promise<void> => {
  const user = await userRepo.findOneBy({id})

  if(!user) throw new AppError('User not found', 404)

  await userRepo.remove(user)
}