import { Prisma, Workout } from "@prisma/client";

export interface IWorkoutService {
  createWorkout(data: Prisma.WorkoutCreateInput): Promise<Workout | null>;
  getAll(): Promise<Workout[] | null>;
  deleteWorkout(workoutId: string): Promise<boolean>;
  updateWorkout(workoutId: string, workout: Prisma.WorkoutUpdateInput): Promise<boolean>;
  getWorkoutById(workoutId: string): Promise<Workout | null>;
}
