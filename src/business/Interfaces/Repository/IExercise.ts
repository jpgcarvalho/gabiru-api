import { Prisma, Exercise } from "@prisma/client";

export interface IExerciseRepository {
  create(exercise: Prisma.ExerciseCreateInput): Promise<Exercise | null>;
  getOneById(id: string): Promise<Exercise | null>;
  getAll(): Promise<Exercise[] | null>;
  update(exerciseId: string, user: Prisma.ExerciseUpdateInput): Promise<boolean>;
  delete(exerciseId: string): Promise<boolean>;
}
