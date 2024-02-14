import { Prisma, Routine } from "@prisma/client";

export interface IRoutineService {
  createRoutine(data: Prisma.RoutineCreateInput): Promise<Routine | null>;
  getAll(): Promise<Routine[] | null>;
  deleteRoutine(routineId: string): Promise<boolean>;
  updateRoutine(routineId: string, routine: Prisma.RoutineUpdateInput): Promise<boolean>;
  getRoutineById(routineId: string): Promise<Routine | null>;
}
