import { Prisma, TrainingDay } from "@prisma/client";

export interface ITrainingDayService {
    createTrainingDay(data: Prisma.TrainingDayCreateInput): Promise<TrainingDay | null>;
    getAll(): Promise<TrainingDay[] | null>;
    deleteTrainingDay(trainingDayId: string): Promise<boolean>;
    updateTrainingDay(trainingDayId: string, trainingDay: Prisma.TrainingDayUpdateInput): Promise<boolean>;
    getTrainingDayById(trainingDayId: string): Promise<TrainingDay | null>;
  }