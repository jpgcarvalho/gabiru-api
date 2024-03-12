import { Router } from "express";
import { WorkoutController } from "../controllers/Workout";

const router: Router = Router();

const workoutController = new WorkoutController();

router.get("/", workoutController.getAllWorkouts.bind(workoutController));

router.post("/", workoutController.createWorkout.bind(workoutController));

router.delete("/:id", workoutController.deleteWorkout.bind(workoutController));

router.put("/:id", workoutController.updateWorkout.bind(workoutController));

router.get("/:id", workoutController.getWorkoutById.bind(workoutController));

export default router;
