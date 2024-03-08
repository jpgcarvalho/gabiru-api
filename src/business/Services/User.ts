import { User, Prisma } from "@prisma/client";
import { UserRepository } from "../../infrastructure/Repositories/User";
import { IUserRepository } from "../Interfaces/Repository/IUser";
import { IUserService } from "../Interfaces/Services/IUser";
import EncryptUserPassword from "../Settings/Crypt/EncryptUserPassword";

export class UserService implements IUserService {


  userRepository: IUserRepository;

  constructor() {
    this.userRepository = new UserRepository()
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User | null> {
    const hashedUser = await EncryptUserPassword(data);
    const response = await this.userRepository.create(hashedUser);
    return response;
  }

  async getAll(): Promise<User[] | null> {

    const response = await this.userRepository.getAll();

    return response;
  }

  async deleteUser(userId: string): Promise<boolean> {

    const response = await this.userRepository.delete(userId);

    return response;
  }

  async updateUser(userId: string, user: Prisma.UserUpdateInput): Promise<boolean> {

    const response = await this.userRepository.update(userId, user);

    return response;
  }

  async getUserById(userId: string): Promise<User | null> {

    const response = await this.userRepository.getOneById(userId);

    return response;
  }

  async getUserByEmail(email: string): Promise<User | null> {

    const response = await this.userRepository.getOneByEmail(email);

    return response;
  }

}
