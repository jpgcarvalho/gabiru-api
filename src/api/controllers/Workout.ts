import { Request, Response } from "express";
import { EMuscularGroup, Prisma } from "@prisma/client";
import { WorkoutService } from "../../business/Services/Workout";

export class WorkoutController {

  private workoutService: WorkoutService;

  constructor() {
    this.workoutService = new WorkoutService();
  }

  public async getAllWorkouts(req: Request, res: Response) {
    const result = await this.workoutService.getAll();
    return res.status(200).json(result);
  }

  public async createWorkout(req: Request<unknown, unknown, Prisma.WorkoutCreateInput, unknown>, res: Response) {
    const workout = req.body;
    const result = await this.workoutService.createWorkout(workout);
    return res.status(200).json(result);
  }

  public async deleteWorkout(req: Request<{ id: string }, unknown, unknown, number>, res: Response) {
    const { params } = req;
    const result = await this.workoutService.deleteWorkout(params.id);
    return res.status(200).json(result);
  }

  public async updateWorkout(req: Request<{ id: string }, unknown, Prisma.WorkoutUpdateInput, unknown>, res: Response) {
    const body = req.body;
    const { id } = req.params;
    const result = await this.workoutService.updateWorkout(id, body);
    return res.status(200).json(result);
  }

  public async getWorkoutById(req: Request<{ id: string }, unknown, unknown, unknown>, res: Response) {
    const { id } = req.params;
    const result = await this.workoutService.getWorkoutById(id);
    return res.status(200).json(result);
  }
}
