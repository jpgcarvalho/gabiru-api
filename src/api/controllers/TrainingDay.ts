import { Request, Response } from "express";
import { EMuscularGroup, Prisma } from "@prisma/client";
import { TrainingDayService } from "../../business/Services/TrainingDay"; // Certifique-se de ter o caminho correto

export class TrainingDayController {

  private trainingDayService: TrainingDayService;

  constructor() {
    this.trainingDayService = new TrainingDayService();
  }

  public async getAllTrainingDays(req: Request, res: Response) {
    const result = await this.trainingDayService.getAll();
    return res.status(200).json(result);
  }

  public async createTrainingDay(req: Request<unknown, unknown, Prisma.TrainingDayCreateInput, unknown>, res: Response) {
    const trainingDay = req.body;
    const result = await this.trainingDayService.createTrainingDay(trainingDay);
    return res.status(200).json(result);
  }

  public async deleteTrainingDay(req: Request<{ id: string }, unknown, unknown, number>, res: Response) {
    const { params } = req;
    const result = await this.trainingDayService.deleteTrainingDay(params.id);
    return res.status(200).json(result);
  }

  public async updateTrainingDay(req: Request<{ id: string }, unknown, Prisma.TrainingDayUpdateInput, unknown>, res: Response) {
    const body = req.body;
    const { id } = req.params;
    const result = await this.trainingDayService.updateTrainingDay(id, body);
    return res.status(200).json(result);
  }

  public async getTrainingDayById(req: Request<{ id: string }, unknown, unknown, unknown>, res: Response) {
    const { id } = req.params;
    const result = await this.trainingDayService.getTrainingDayById(id);
    return res.status(200).json(result);
  }
}
