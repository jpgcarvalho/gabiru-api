import { User, Prisma } from "@prisma/client";
import { IUser } from "../Prisma/IUser";

export interface IUserRepository {
  create(user: Prisma.UserCreateInput): Promise<User | null>;
  getOneById(id: number): Promise<User | null>;
  getOneByEmail(email: string): Promise<User | null>;
  getAll(): Promise<User[] | null>;
  update(userId: number, user: Prisma.UserUpdateInput): Promise<boolean>;
  delete(userId: number): Promise<boolean>;
}