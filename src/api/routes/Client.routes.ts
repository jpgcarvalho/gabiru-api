import { Router } from "express";
import { ClientController } from "../controllers/Client";
import authenticateToken from "../../business/Settings/Auth/AuthMiddleware";

const router: Router = Router();

const clientController = new ClientController();
router.use(authenticateToken);

router.get("/",  clientController.getAll.bind(clientController));

router.post("/", clientController.create.bind(clientController));

router.delete("/:id", clientController.delete.bind(clientController));

router.put("/:id",  clientController.update.bind(clientController));

router.get("/email",  clientController.getByEmail.bind(clientController));

router.get("/:id", clientController.getById.bind(clientController));

export default router;