import { Request, Response } from "express";
import { UserService } from "../../business/Services/User";
import { Prisma, User } from "@prisma/client";

export class UserController {

  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }


  public async getAllUsers(req: Request, res: Response) {

    const result = await this.userService.getAll();

    return res.status(200).json(result);
  }

  public async createUser(req: Request<unknown, unknown, Prisma.UserCreateInput, unknown>, res: Response) {

    const user = req.body;

    const result = await this.userService.createUser(user);

    return res.status(200).json(result);
  }

  public async deleteUser(req: Request<{ id: string }, unknown, unknown, number>, res: Response) {

    const { params } = req;

    const result = await this.userService.deleteUser(params.id);

    return res.status(200).json(result);

  }

  public async updateUser(req: Request<{ id: string }, unknown, Prisma.UserUpdateInput, unknown>, res: Response) {

    const corpo = req.body;
    const { id } = req.params

    const result = await this.userService.updateUser(id, corpo);

    return res.status(200).json(result);

  }

  public async getUserById(req: Request<{ id: string }, unknown, unknown, unknown>, res: Response) {

    const { id } = req.params;

    const result = await this.userService.getUserById(id);

    return res.status(200).json(result);

  }

  public async getUserByEmail(req: Request<unknown, unknown, { email: string }, unknown>, res: Response) {

    const { email } = req.body;

    const result = await this.userService.getUserByEmail(email);

    return res.status(200).json(result);

  }


}
