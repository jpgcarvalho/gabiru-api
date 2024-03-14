import { Router } from "express";
import { PersonalController } from "../controllers/Personal";
import authenticateToken from "../../business/Settings/Auth/AuthMiddleware";

const router: Router = Router();

const personalController = new PersonalController();

router.get("/", /* authenticateToken,  */personalController.getAll.bind(personalController));

router.post("/", personalController.create.bind(personalController));
// TODO: Adicionar middleware de autenticação
router.delete("/:id", personalController.delete.bind(personalController));

router.put("/:id", authenticateToken,  personalController.update.bind(personalController));

router.get("/email", authenticateToken, personalController.getByEmail.bind(personalController));

router.get("/:id", authenticateToken, personalController.getById.bind(personalController));

export default router;
