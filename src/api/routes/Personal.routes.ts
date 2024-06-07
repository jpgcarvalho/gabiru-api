import { Router } from "express";
import asyncHandler from "express-async-handler";
import { PersonalController } from "../controllers/Personal";
import authenticateToken from "../../business/Settings/Auth/AuthMiddleware";

const router: Router = Router();

const personalController = new PersonalController();

router.get("/", authenticateToken, asyncHandler(personalController.getAll.bind(personalController)));

router.post("/", asyncHandler(personalController.create.bind(personalController)));
// TODO: Adicionar middleware de autenticação
router.delete("/:id", asyncHandler(personalController.delete.bind(personalController)));

router.put("/:id", authenticateToken,  asyncHandler(personalController.update.bind(personalController)));

router.get("/email", authenticateToken, asyncHandler(personalController.getByEmail.bind(personalController)));

router.get("/:id", authenticateToken, asyncHandler(personalController.getById.bind(personalController)));

export default router;
