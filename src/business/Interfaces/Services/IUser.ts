import { User, Prisma } from "@prisma/client";

export interface IUserService {
  createUser(data: Prisma.UserCreateInput): Promise<User | null>;
  getAll(): Promise<User[] | null>;
  deleteUser(userId: string): Promise<boolean>;
  updateUser(userId: string, user: Prisma.UserUpdateInput): Promise<boolean>;
  getUserById(userId: string): Promise<User | null>;
  getUserByEmail(email: string): Promise<User | null>;
}
