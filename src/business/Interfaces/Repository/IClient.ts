import { Client, Prisma } from "@prisma/client";

export interface IClientRepository {
  create(client: Prisma.ClientCreateInput): Promise<Client | null>;
  getOneById(id: string): Promise<Client | null>;
  getOneByEmail(email: string): Promise<Client | null>;
  getAll(): Promise<Client[] | null>;
  update(clientId: string, client: Prisma.ClientUpdateInput): Promise<boolean>;
  delete(clientId: string): Promise<boolean>;
}
