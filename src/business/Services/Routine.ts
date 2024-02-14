import { Prisma, Routine } from "@prisma/client";
import { IRoutineService } from "../Interfaces/Services/IRoutine";
import { RoutineRepository } from "../../infrastructure/Repositories/Routine";
import { IRoutineRepository } from "../Interfaces/Repository/IRoutine";

export class RoutineService implements IRoutineService {


  routineRepository: IRoutineRepository;

  constructor() {
    this.routineRepository = new RoutineRepository()
  }


  async createRoutine(data: Prisma.RoutineCreateInput): Promise<Routine | null> {

    const response = await this.routineRepository.create(data);

    return response;
  }

  async getAll(): Promise<Routine[] | null> {

    const response = await this.routineRepository.getAll();

    return response;
  }

  async deleteRoutine(routineId: string): Promise<boolean> {

    const response = await this.routineRepository.delete(routineId);

    return response;
  }

  async updateRoutine(routineId: string, routine: Prisma.RoutineUpdateInput): Promise<boolean> {

    const response = await this.routineRepository.update(routineId, routine);

    return response;
  }

  async getRoutineById(routineId: string): Promise<Routine | null> {

    const response = await this.routineRepository.getOneById(routineId);

    return response;
  }


}
