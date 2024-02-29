import { Router } from "express";
import { UserController } from "../controllers/User";
import authenticateToken from "../../business/Settings/Auth/AuthMiddleware";

const router: Router = Router();

const userController = new UserController();

router.get("/", authenticateToken, userController.getAllUsers.bind(userController));

router.post("/", userController.createUser.bind(userController));
// TODO: Add authentication middleware
router.delete("/:id", userController.deleteUser.bind(userController));

router.put("/:id", authenticateToken, userController.updateUser.bind(userController));

router.get("/email", authenticateToken, userController.getUserByEmail.bind(userController));

router.get("/:id", authenticateToken, userController.getUserById.bind(userController));

export default router;