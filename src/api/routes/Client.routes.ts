import { Router } from "express";
import { ClientController } from "../controllers/Client";
import authenticateToken from "../../business/Settings/Auth/AuthMiddleware";

const router: Router = Router();

const clientController = new ClientController();

router.get("/", /* authenticateToken, */ clientController.getAll.bind(clientController));

router.post("/", clientController.create.bind(clientController));
// TODO: Add authentication middleware
router.delete("/:id", clientController.delete.bind(clientController));

router.put("/:id",/*  authenticateToken, */ clientController.update.bind(clientController));

router.get("/email", /* authenticateToken, */ clientController.getByEmail.bind(clientController));

router.get("/:id",/*  authenticateToken, */ clientController.getById.bind(clientController));

export default router;