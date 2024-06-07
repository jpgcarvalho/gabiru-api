import { Request, Response } from "express";
import { PersonalService } from "../../business/Services/Personal"; // Certifique-se de ter o caminho correto
import { Prisma, Personal } from "@prisma/client";
import createError from "http-errors";

export class PersonalController {
  private personalService: PersonalService;

  constructor() {
    this.personalService = new PersonalService();
  }

  public async getAll(req: Request, res: Response) {
    const result = await this.personalService.getAll();

    res.status(200).json(result);
  }

  public async create(
    req: Request<unknown, unknown, Prisma.PersonalCreateInput, unknown>,
    res: Response
  ) {
    const personal = req.body;

    const result = await this.personalService.create(personal);

    res.status(200).json(result);
  }

  public async delete(
    req: Request<{ id: string }, unknown, unknown, number>,
    res: Response
  ) {
    const { params } = req;

    const result = await this.personalService.delete(params.id);

    res.status(200).json(result);
  }

  public async update(
    req: Request<{ id: string }, unknown, Prisma.PersonalUpdateInput, unknown>,
    res: Response
  ) {
    const body = req.body;
    const { id } = req.params;

    const result = await this.personalService.update(id, body);

    res.status(200).json(result);
  }

  public async getById(
    req: Request<{ id: string }, unknown, unknown, unknown>,
    res: Response
  ) {
    const { id } = req.params;

    const result = await this.personalService.getById(id);

    res.status(200).json(result);
  }

  public async getByEmail(
    req: Request<unknown, unknown, { email: string }, unknown>,
    res: Response
  ) {
    const { email } = req.body;

    const result = await this.personalService.getByEmail(email);

    res.status(200).json(result);
  }
}
