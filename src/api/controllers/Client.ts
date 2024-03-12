import { Request, Response } from "express";
import { ClientService } from "../../business/Services/Client";
import { Prisma, Client } from "@prisma/client";

export class ClientController {

  private clientService: ClientService;

  constructor() {
    this.clientService = new ClientService();
  }


  public async getAll(req: Request, res: Response) {

    const result = await this.clientService.getAll();

    return res.status(200).json(result);
  }

  public async create(req: Request<unknown, unknown, Prisma.ClientCreateInput, unknown>, res: Response) {

    const client = req.body;

    const result = await this.clientService.create(client);

    return res.status(200).json(result);
  }

  public async delete(req: Request<{ id: string }, unknown, unknown, number>, res: Response) {

    const { params } = req;

    const result = await this.clientService.delete(params.id);

    return res.status(200).json(result);

  }

  public async update(req: Request<{ id: string }, unknown, Prisma.ClientUpdateInput, unknown>, res: Response) {

    const corpo = req.body;
    const { id } = req.params

    const result = await this.clientService.update(id, corpo);

    return res.status(200).json(result);

  }

  public async getById(req: Request<{ id: string }, unknown, unknown, unknown>, res: Response) {

    const { id } = req.params;

    const result = await this.clientService.getById(id);

    return res.status(200).json(result);

  }

  public async getByEmail(req: Request<unknown, unknown, { email: string }, unknown>, res: Response) {

    const { email } = req.body;

    const result = await this.clientService.getByEmail(email);

    return res.status(200).json(result);

  }


}
