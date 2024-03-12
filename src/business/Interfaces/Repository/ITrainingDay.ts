import { Prisma, TrainingDay } from "@prisma/client";

export interface ITrainingDayRepository {
  create(trainingDay: Prisma.TrainingDayCreateInput): Promise<TrainingDay | null>;
  getOneById(id: string): Promise<TrainingDay | null>;
  getAll(): Promise<TrainingDay[] | null>;
  update(trainingDayId: string, user: Prisma.TrainingDayUpdateInput): Promise<boolean>;
  delete(trainingDayId: string): Promise<boolean>;
}
