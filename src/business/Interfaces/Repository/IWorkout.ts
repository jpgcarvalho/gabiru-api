import { Prisma, Workout } from "@prisma/client";

export interface IWorkoutRepository {
  create(workout: Prisma.WorkoutCreateInput): Promise<Workout | null>;
  getOneById(id: string): Promise<Workout | null>;
  getAll(): Promise<Workout[] | null>;
  update(workoutId: string, workout: Prisma.WorkoutUpdateInput): Promise<boolean>;
  delete(workoutId: string): Promise<boolean>;
}
