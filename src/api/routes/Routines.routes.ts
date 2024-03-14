import { Router } from "express";
import { RoutineController } from "../controllers/Routine";
import authenticateToken from "../../business/Settings/Auth/AuthMiddleware";

const router: Router = Router();

const routineController = new RoutineController();

router.use(authenticateToken);

router.get("/", routineController.getAllRoutines.bind(routineController));

router.post("/", routineController.createRoutine.bind(routineController));

router.delete("/:id", routineController.deleteRoutine.bind(routineController));

router.put("/:id", routineController.updateRoutine.bind(routineController));

router.get("/:id", routineController.getRoutineById.bind(routineController));

export default router;
