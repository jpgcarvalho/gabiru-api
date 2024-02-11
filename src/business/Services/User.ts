import { User, Prisma } from "@prisma/client";
import { UserRepository } from "../../infrastructure/Repositories/User";
import { IUserRepository } from "../Interfaces/Repository/IUser";
import { IUserService } from "../Interfaces/Services/IUser";

export class UserService implements IUserService {


  userRepository: IUserRepository;

  constructor() {
    this.userRepository = new UserRepository()
  }


  async createUser(data: Prisma.UserCreateInput): Promise<User | null> {

    const response = await this.userRepository.create(data);

    return response;
  }

  async getAll(): Promise<User[] | null> {

    const response = await this.userRepository.getAll();

    return response;
  }

  async deleteUser(userId: number): Promise<boolean> {

    const response = await this.userRepository.delete(userId);

    return response;
  }

  async updateUser(userId: number, user: Prisma.UserUpdateInput): Promise<boolean> {

    const response = await this.userRepository.update(userId, user);

    return response;
  }

  async getUserById(userId: number): Promise<User | null> {

    const response = await this.userRepository.getOneById(userId);

    return response;
  }

  async getUserByEmail(email: string): Promise<User | null> {

    const response = await this.userRepository.getOneByEmail(email);

    return response;
  }

}