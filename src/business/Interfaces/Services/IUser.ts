import { User, Prisma } from "@prisma/client";

export interface IUserService {
  createUser(data: Prisma.UserCreateInput): Promise<User | null>;
  getAll(): Promise<User[] | null>;
  deleteUser(userId: number): Promise<boolean>;
  updateUser(userId: number, user: Prisma.UserUpdateInput): Promise<boolean>;
  getUserById(userId: number): Promise<User | null>;
  getUserByEmail(email: string): Promise<User | null>;
}