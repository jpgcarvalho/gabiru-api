import { Prisma, TrainingDay } from "@prisma/client";
import { ITrainingDayService } from "../Interfaces/Services/ITrainingDay";
import { TrainingDayRepository } from "../../infrastructure/Repositories/TrainingDay";
import { ITrainingDayRepository } from "../Interfaces/Repository/ITrainingDay";

export class TrainingDayService implements ITrainingDayService {

  trainingDayRepository: ITrainingDayRepository;

  constructor() {
    this.trainingDayRepository = new TrainingDayRepository();
  }

  async createTrainingDay(data: Prisma.TrainingDayCreateInput): Promise<TrainingDay | null> {
    const response = await this.trainingDayRepository.create(data);
    return response;
  }

  async getAll(): Promise<TrainingDay[] | null> {
    const response = await this.trainingDayRepository.getAll();
    return response;
  }

  async deleteTrainingDay(trainingDayId: string): Promise<boolean> {
    const response = await this.trainingDayRepository.delete(trainingDayId);
    return response;
  }

  async updateTrainingDay(trainingDayId: string, trainingDay: Prisma.TrainingDayUpdateInput): Promise<boolean> {
    const response = await this.trainingDayRepository.update(trainingDayId, trainingDay);
    return response;
  }

  async getTrainingDayById(trainingDayId: string): Promise<TrainingDay | null> {
    const response = await this.trainingDayRepository.getOneById(trainingDayId);
    return response;
  }
}
