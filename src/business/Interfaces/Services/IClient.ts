import { Client, Prisma } from "@prisma/client";

export interface IClientService {
  create(client: Prisma.ClientCreateInput): Promise<Client | null>;
  getAll(): Promise<Client[] | null>;
  delete(clientId: string): Promise<boolean>;
  update(clientId: string, client: Prisma.ClientUpdateInput): Promise<boolean>;
  getById(clientId: string): Promise<Client | null>;
  getByEmail(email: string): Promise<Client | null>;
}
