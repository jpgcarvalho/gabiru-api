import { Prisma, Exercise } from "@prisma/client";

export interface IExerciseService {
  createExercise(data: Prisma.ExerciseCreateInput): Promise<Exercise | null>;
  getAll(): Promise<Exercise[] | null>;
  deleteExercise(exerciseId: string): Promise<boolean>;
  updateExercise(exerciseId: string, exercise: Prisma.ExerciseUpdateInput): Promise<boolean>;
  getExerciseById(exerciseId: string): Promise<Exercise | null>;
}
