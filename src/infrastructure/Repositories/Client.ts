import { Prisma, Client } from "@prisma/client";
import { IClientRepository } from "../../business/Interfaces/Repository/IClient";
import { databaseClient } from "../prismaClient";

export class ClientRepository implements IClientRepository {

  database: typeof databaseClient.client;

  constructor() {
    this.database = databaseClient.client;
  }

  async create(client: Prisma.ClientCreateInput): Promise<Client | null> {


    const clientAlreadyExists = await this.getOneByEmail(client.email);

    if (clientAlreadyExists) return null

    const response = await this.database.create({
      data: {
        ...client
      }
    })

    return response;
  }

  async getOneById(id: string): Promise<Client | null> {
    const response = await this.database.findUnique({
      where: {
        id
      }
    })

    return response;

  }

  async getOneByEmail(email: string): Promise<Client | null> {
    const response = await this.database.findUnique({
      where: {
        email
      }
    })

    return response;
  }

  async getAll(): Promise<Client[]> {
    const response = await this.database.findMany();
    return response;
  }

  async update(clientId: string, client: Prisma.ClientUpdateInput): Promise<boolean> {

    const response = await this.database.update({
      where: { id: clientId },
      data: {
        ...client
      }
    });

    return !!response;
  }

  async delete(clientId: string): Promise<boolean> {
    const response = await this.database.delete({
      where: {
        id: clientId
      },
    })

    return !!response;
  }
}
