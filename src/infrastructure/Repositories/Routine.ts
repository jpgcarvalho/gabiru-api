import { Prisma, Routine } from "@prisma/client";
import { databaseClient } from "../prismaClient";
import { IRoutineRepository } from "../../business/Interfaces/Repository/IRoutine";

export class RoutineRepository implements IRoutineRepository {

  database: typeof databaseClient.routine;

  constructor() {
    this.database = databaseClient.routine
  }

  async create(routine: Prisma.RoutineCreateInput): Promise<Routine | null> {

    const response = await this.database.create({
      data: {
        ...routine
      }
    })

    return response;
  }

  async getOneById(id: string): Promise<Routine | null> {
    const response = await this.database.findUnique({
      where: {
        id
      },
      include: {
        user: true
      }

    })

    return response;

  }

  async getAll(): Promise<Routine[]> {
    const response = await this.database.findMany();

    return response;
  }

  async update(routineId: string, routine: Prisma.RoutineUpdateInput): Promise<boolean> {

    const response = await this.database.update({
      where: { id: routineId },
      data: {
        ...routine
      }
    });

    return !!response;
  }

  async delete(routineId: string): Promise<boolean> {
    const response = await this.database.delete({
      where: {
        id: routineId
      },
    })

    return !!response;
  }

}
