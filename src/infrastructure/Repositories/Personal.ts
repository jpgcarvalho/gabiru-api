import { Prisma, Personal } from "@prisma/client";
import { IPersonalRepository } from "../../business/Interfaces/Repository/IPersonal";
import { databaseClient } from "../prismaClient";
import createHttpError from "http-errors";

export class PersonalRepository implements IPersonalRepository {
  database: typeof databaseClient.personal;

  constructor() {
    this.database = databaseClient.personal;
  }

  async create(personal: Prisma.PersonalCreateInput): Promise<Personal | null> {
    const personalAlreadyExists = await this.getOneByEmail(personal.email);

    if (personalAlreadyExists)
      throw createHttpError(400, "Usuário já cadastrado no sistema");

    const response = await this.database.create({
      data: {
        ...personal,
      },
    });

    return response;
  }

  async getOneById(id: string): Promise<Personal | null> {
    const response = await this.database.findUnique({
      where: {
        id,
      },
    });

    return response;
  }

  async getOneByEmail(email: string): Promise<Personal | null> {
    const response = await this.database.findUnique({
      where: {
        email,
      },
    });

    return response;
  }

  async getAll(): Promise<Personal[]> {
    const response = await this.database.findMany();
    return response;
  }

  async update(
    personalId: string,
    personal: Prisma.PersonalUpdateInput
  ): Promise<boolean> {
    const response = await this.database.update({
      where: { id: personalId },
      data: {
        ...personal,
      },
    });

    return !!response;
  }

  async delete(personalId: string): Promise<boolean> {
    const response = await this.database.delete({
      where: {
        id: personalId,
      },
    });

    return !!response;
  }
}
