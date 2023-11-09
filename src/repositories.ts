import { Repository } from "typeorm";
import { AppDataSource } from "./data-source";
import { User } from "./entities/user.entity";

export const userRepo: Repository<User> = AppDataSource.getRepository(User)