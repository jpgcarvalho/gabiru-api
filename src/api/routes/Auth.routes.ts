import { Router } from "express";
import { ExerciseController } from "../controllers/Exercise";
import { AuthController } from "../controllers/Auth";

const router: Router = Router();

const authController = new AuthController();

router.post("/login", authController.login.bind(authController));


export default router;
