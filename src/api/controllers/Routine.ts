import { Request, Response } from "express";
import { EMuscularGroup, Prisma } from "@prisma/client";
import { RoutineService } from "../../business/Services/Routine";

export class RoutineController {

  private routineService: RoutineService;

  constructor() {
    this.routineService = new RoutineService();
  }


  public async getAllRoutines(req: Request, res: Response) {

    const result = await this.routineService.getAll();

    return res.status(200).json(result);
  }

  public async createRoutine(req: Request<unknown, unknown, Prisma.RoutineCreateInput, unknown>, res: Response) {

    const routine = req.body;

    const result = await this.routineService.createRoutine(routine);

    return res.status(200).json(result);
  }

  public async deleteRoutine(req: Request<{ id: string }, unknown, unknown, number>, res: Response) {

    const { params } = req;

    const result = await this.routineService.deleteRoutine(params.id);

    return res.status(200).json(result);

  }

  public async updateRoutine(req: Request<{ id: string }, unknown, Prisma.RoutineUpdateInput, unknown>, res: Response) {

    const corpo = req.body;
    const { id } = req.params

    const result = await this.routineService.updateRoutine(id, corpo);

    return res.status(200).json(result);

  }

  public async getRoutineById(req: Request<{ id: string }, unknown, unknown, unknown>, res: Response) {

    const { id } = req.params;

    const result = await this.routineService.getRoutineById(id);

    return res.status(200).json(result);

  }


}
