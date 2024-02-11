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

  public async createUser(req: Request, res: Response) {

    const user = req.body;

    const result = await this.userService.createUser(user);

    return res.status(200).json(result);
  }

  public async deleteUser(req: Request<{ id: number }, unknown, unknown, number>, res: Response) {

    const { params } = req;

    const result = await this.userService.deleteUser(Number(params.id));

    return res.status(200).json(result);

  }

  public async updateUser(req: Request<{ id: number }, unknown, Prisma.UserUpdateInput, unknown>, res: Response) {

    const corpo = req.body;
    const { id } = req.params

    const result = await this.userService.updateUser(Number(id), corpo);

    return res.status(200).json(result);

  }

  public async getUserById(req: Request<{ id: number }, unknown, unknown, unknown>, res: Response) {

    const { id } = req.params;

    const result = await this.userService.getUserById(Number(id));

    return res.status(200).json(result);

  }

  public async getUserByEmail(req: Request<unknown, unknown, { email: string }, unknown>, res: Response) {

    const { email } = req.body;

    const result = await this.userService.getUserByEmail(email);

    return res.status(200).json(result);

  }


}
