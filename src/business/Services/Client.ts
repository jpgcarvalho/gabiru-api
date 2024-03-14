import { Client, Prisma } from "@prisma/client";
import { ClientRepository } from "../../infrastructure/Repositories/Client";
import { IClientRepository } from "../Interfaces/Repository/IClient";
import { IClientService } from "../Interfaces/Services/IClient";
import EncryptUserPassword from "../Settings/Crypt/EncryptUserPassword";

export class ClientService implements IClientService {

  clientRepository: IClientRepository;

  constructor() {
    this.clientRepository = new ClientRepository()
  }

  async create(data: Prisma.ClientCreateInput): Promise<Client | null> {
    // TODO gerar key
    const response = await this.clientRepository.create(data);
    return response;
  }

  async getAll(): Promise<Client[] | null> {

    const response = await this.clientRepository.getAll();

    return response;
  }

  async delete(clientId: string): Promise<boolean> {

    const response = await this.clientRepository.delete(clientId);

    return response;
  }

  async update(clientId: string, client: Prisma.ClientUpdateInput): Promise<boolean> {

    const response = await this.clientRepository.update(clientId, client);

    return response;
  }

  async getById(clientId: string): Promise<Client | null> {

    const response = await this.clientRepository.getOneById(clientId);

    return response;
  }

  async getByEmail(email: string): Promise<Client | null> {

    const response = await this.clientRepository.getOneByEmail(email);

    return response;
  }

}
