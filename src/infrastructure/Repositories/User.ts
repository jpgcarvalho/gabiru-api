import { Prisma, User } from "@prisma/client";
import { IUserRepository } from "../../business/Interfaces/Repository/IUser";
import { databaseClient } from "../prismaClient";

export class UserRepository implements IUserRepository {

  database: typeof databaseClient.user;

  constructor() {
    this.database = databaseClient.user
  }

  async create(user: Prisma.UserCreateInput): Promise<User | null> {


    const userAlreadyExists = await this.getOneByEmail(user.email);

    if (userAlreadyExists) return null

    const response = await this.database.create({
      data: {
        ...user
      }
    })

    return response;
  }

  async getOneById(id: number): Promise<User | null> {
    const response = await this.database.findUnique({
      where: {
        id
      }
    })

    return response;

  }

  async getOneByEmail(email: string): Promise<User | null> {
    const response = await this.database.findUnique({
      where: {
        email
      }
    })

    return response;

  }

  async getAll(): Promise<User[]> {
    const response = await this.database.findMany({
      include: {
        posts: true
      }
    });

    return response;
  }

  async update(userId: number, user: Prisma.UserUpdateInput): Promise<boolean> {

    const response = await this.database.update({
      where: { id: userId },
      data: {
        ...user
      }
    });

    return !!response;
  }

  async delete(userId: number): Promise<boolean> {
    const response = await this.database.delete({
      where: {
        id: userId
      },
    })

    return !!response;
  }

}
