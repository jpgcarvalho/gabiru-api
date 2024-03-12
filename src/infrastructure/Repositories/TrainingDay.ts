import { Prisma, TrainingDay } from "@prisma/client";
import { databaseClient } from "../prismaClient";
import { ITrainingDayRepository } from "../../business/Interfaces/Repository/ITrainingDay";

export class TrainingDayRepository implements ITrainingDayRepository {

  database: typeof databaseClient.trainingDay;

  constructor() {
    this.database = databaseClient.trainingDay;
  }

  async create(trainingDay: Prisma.TrainingDayCreateInput): Promise<TrainingDay | null> {

    const response = await this.database.create({
      data: {
        ...trainingDay
      }
    });

    return response;
  }

  async getOneById(id: string): Promise<TrainingDay | null> {
    const response = await this.database.findUnique({
      where: {
        id
      },
      include: {
        Workout: true
      }
    });

    return response;
  }

  async getAll(): Promise<TrainingDay[]> {
    const response = await this.database.findMany();

    return response;
  }

  async update(trainingDayId: string, trainingDay: Prisma.TrainingDayUpdateInput): Promise<boolean> {

    const response = await this.database.update({
      where: { id: trainingDayId },
      data: {
        ...trainingDay
      }
    });

    return !!response;
  }

  async delete(trainingDayId: string): Promise<boolean> {
    const response = await this.database.delete({
      where: {
        id: trainingDayId
      },
    });

    return !!response;
  }

}
