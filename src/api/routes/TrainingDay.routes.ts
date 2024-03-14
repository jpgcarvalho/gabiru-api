import { Router } from "express";
import { TrainingDayController } from "../controllers/TrainingDay";
import authenticateToken from "../../business/Settings/Auth/AuthMiddleware";

const router: Router = Router();

const trainingDayController = new TrainingDayController();

router.use(authenticateToken);

router.get("/", trainingDayController.getAllTrainingDays.bind(trainingDayController));

router.post("/", trainingDayController.createTrainingDay.bind(trainingDayController));

router.delete("/:id", trainingDayController.deleteTrainingDay.bind(trainingDayController));

router.put("/:id", trainingDayController.updateTrainingDay.bind(trainingDayController));

router.get("/:id", trainingDayController.getTrainingDayById.bind(trainingDayController));

export default router;
