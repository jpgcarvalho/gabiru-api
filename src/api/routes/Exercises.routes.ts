import { Router } from "express";
import { ExerciseController } from "../controllers/Exercise";

const router: Router = Router();

const exerciseController = new ExerciseController();

router.get("/", exerciseController.getAllExercises.bind(exerciseController));

router.post("/", exerciseController.createExercise.bind(exerciseController));

router.delete("/:id", exerciseController.deleteExercise.bind(exerciseController));

router.put("/:id", exerciseController.updateExercise.bind(exerciseController));

router.get("/:id", exerciseController.getExerciseById.bind(exerciseController));

export default router;
