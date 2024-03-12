import { Prisma, Workout } from "@prisma/client";
import { IWorkoutService } from "../Interfaces/Services/IWorkout"; 
import { WorkoutRepository } from "../../infrastructure/Repositories/Workout";
import { IWorkoutRepository } from "../Interfaces/Repository/IWorkout";

export class WorkoutService implements IWorkoutService {

  workoutRepository: IWorkoutRepository;

  constructor() {
    this.workoutRepository = new WorkoutRepository();
  }

  async createWorkout(data: Prisma.WorkoutCreateInput): Promise<Workout | null> {
    const response = await this.workoutRepository.create(data);
    return response;
  }

  async getAll(): Promise<Workout[] | null> {
    const response = await this.workoutRepository.getAll();
    return response;
  }

  async deleteWorkout(workoutId: string): Promise<boolean> {
    const response = await this.workoutRepository.delete(workoutId);
    return response;
  }

  async updateWorkout(workoutId: string, workout: Prisma.WorkoutUpdateInput): Promise<boolean> {
    const response = await this.workoutRepository.update(workoutId, workout);
    return response;
  }

  async getWorkoutById(workoutId: string): Promise<Workout | null> {
    const response = await this.workoutRepository.getOneById(workoutId);
    return response;
  }
}
