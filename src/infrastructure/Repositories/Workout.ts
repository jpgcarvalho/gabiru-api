import { Workout, Prisma, Client } from "@prisma/client";
import { databaseClient } from "../prismaClient";
import { IWorkoutRepository } from "../../business/Interfaces/Repository/IWorkout";

export class WorkoutRepository implements IWorkoutRepository {

  database: typeof databaseClient.workout;

  constructor() {
    this.database = databaseClient.workout;
  }

  async create(workout: Prisma.WorkoutCreateInput): Promise<Workout | null> {
    const response = await this.database.create({
      data: {
        ...workout
      }
    });
    return response;
  }

  async getOneById(id: string): Promise<Workout | null> {
    const response = await this.database.findUnique({
      where: {
        id
      },
      include: {
        exercise: true
      }
    });
    return response;
  }

  async getAll(): Promise<Workout[]> {
    const response = await this.database.findMany();
    return response;
  }

  async update(workoutId: string, workout: Prisma.WorkoutUpdateInput): Promise<boolean> {
    const response = await this.database.update({
      where: { id: workoutId },
      data: {
        ...workout
      }
    });
    return !!response;
  }

  async delete(workoutId: string): Promise<boolean> {
    const response = await this.database.delete({
      where: {
        id: workoutId
      },
    });
    return !!response;
  }

}
