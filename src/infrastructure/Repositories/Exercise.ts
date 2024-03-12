import { Exercise, Prisma, Client } from "@prisma/client";
import { databaseClient } from "../prismaClient";
import { IExerciseRepository } from "../../business/Interfaces/Repository/IExercise";

export class ExerciseRepository implements IExerciseRepository {

  database: typeof databaseClient.exercise;

  constructor() {
    this.database = databaseClient.exercise
  }

  async create(exercise: Prisma.ExerciseCreateInput): Promise<Exercise | null> {

    const response = await this.database.create({
      data: {
        ...exercise
      }
    })

    return response;
  }

  async getOneById(id: string): Promise<Exercise | null> {
    const response = await this.database.findUnique({
      where: {
        id
      }
    })

    return response;

  }

  async getAll(): Promise<Exercise[]> {
    const response = await this.database.findMany();

    return response;
  }

  async update(exerciseId: string, exercise: Prisma.ExerciseUpdateInput): Promise<boolean> {

    const response = await this.database.update({
      where: { id: exerciseId },
      data: {
        ...exercise
      }
    });

    return !!response;
  }

  async delete(exerciseId: string): Promise<boolean> {
    const response = await this.database.delete({
      where: {
        id: exerciseId
      },
    })

    return !!response;
  }

}
