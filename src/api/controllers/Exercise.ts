import { Request, Response } from "express";
import { EMuscularGroup, Prisma } from "@prisma/client";
import { ExerciseService } from "../../business/Services/Exercise";

export class ExerciseController {

  private exerciseService: ExerciseService;

  constructor() {
    this.exerciseService = new ExerciseService();
  }


  public async getAllExercises(req: Request, res: Response) {

    const result = await this.exerciseService.getAll();

    return res.status(200).json(result);
  }

  public async createExercise(req: Request<unknown, unknown, Prisma.ExerciseCreateInput, unknown>, res: Response) {

    const exercise = req.body;

    const result = await this.exerciseService.createExercise(exercise);

    return res.status(200).json(result);
  }

  public async deleteExercise(req: Request<{ id: string }, unknown, unknown, number>, res: Response) {

    const { params } = req;

    const result = await this.exerciseService.deleteExercise(params.id);

    return res.status(200).json(result);

  }

  public async updateExercise(req: Request<{ id: string }, unknown, Prisma.ExerciseUpdateInput, unknown>, res: Response) {

    const corpo = req.body;
    const { id } = req.params

    const result = await this.exerciseService.updateExercise(id, corpo);

    return res.status(200).json(result);

  }

  public async getExerciseById(req: Request<{ id: string }, unknown, unknown, unknown>, res: Response) {

    const { id } = req.params;

    const result = await this.exerciseService.getExerciseById(id);

    return res.status(200).json(result);

  }


}
