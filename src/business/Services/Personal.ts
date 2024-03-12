import { Personal, Prisma } from "@prisma/client";
import { PersonalRepository } from "../../infrastructure/Repositories/Personal";
import { IPersonalRepository } from "../Interfaces/Repository/IPersonal"; 
import { IPersonalService } from "../Interfaces/Services/IPersonal"; 
import EncryptUserPassword from "../Settings/Crypt/EncryptUserPassword";

export class PersonalService implements IPersonalService {

  personalRepository: IPersonalRepository;

  constructor() {
    this.personalRepository = new PersonalRepository();
  }

  async create(data: Prisma.PersonalCreateInput): Promise<Personal | null> {
    // const hashedPersonal = await EncryptUserPassword(data);
    const response = await this.personalRepository.create(data);
    return response;
  }

  async getAll(): Promise<Personal[] | null> {

    const response = await this.personalRepository.getAll();

    return response;
  }

  async delete(personalId: string): Promise<boolean> {

    const response = await this.personalRepository.delete(personalId);

    return response;
  }

  async update(personalId: string, personal: Prisma.PersonalUpdateInput): Promise<boolean> {

    const response = await this.personalRepository.update(personalId, personal);

    return response;
  }

  async getById(personalId: string): Promise<Personal | null> {

    const response = await this.personalRepository.getOneById(personalId);

    return response;
  }

  async getByEmail(email: string): Promise<Personal | null> {

    const response = await this.personalRepository.getOneByEmail(email);

    return response;
  }

}
