import { Prisma, Routine } from "@prisma/client";

export interface IRoutineRepository {
  create(routine: Prisma.RoutineCreateInput): Promise<Routine | null>;
  getOneById(id: string): Promise<Routine | null>;
  getAll(): Promise<Routine[] | null>;
  update(routineId: string, user: Prisma.RoutineUpdateInput): Promise<boolean>;
  delete(routineId: string): Promise<boolean>;
}
