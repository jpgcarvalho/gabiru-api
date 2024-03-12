import { Prisma, Exercise } from "@prisma/client";
import { IExerciseService } from "../Interfaces/Services/IExercise";
import { ExerciseRepository } from "../../infrastructure/Repositories/Exercise";
import { IExerciseRepository } from "../Interfaces/Repository/IExercise";

export class ExerciseService implements IExerciseService {

  exerciseRepository: IExerciseRepository;

  constructor() {
    this.exerciseRepository = new ExerciseRepository()
  }

  async createExercise(data: Prisma.ExerciseCreateInput): Promise<Exercise | null> {

    const response = await this.exerciseRepository.create(data);

    return response;
  }

  async getAll(): Promise<Exercise[] | null> {

    const response = await this.exerciseRepository.getAll();

    return response;
  }

  async deleteExercise(exerciseId: string): Promise<boolean> {

    const response = await this.exerciseRepository.delete(exerciseId);

    return response;
  }

  async updateExercise(exerciseId: string, exercise: Prisma.ExerciseUpdateInput): Promise<boolean> {

    const response = await this.exerciseRepository.update(exerciseId, exercise);

    return response;
  }

  async getExerciseById(exerciseId: string): Promise<Exercise | null> {

    const response = await this.exerciseRepository.getOneById(exerciseId);

    return response;
  }
}
