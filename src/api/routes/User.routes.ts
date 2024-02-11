import { Router } from "express";
import { UserController } from "../controllers/User";

const router: Router = Router();

const userController = new UserController();

router.get("/", userController.getAllUsers.bind(userController));

router.post("/", userController.createUser.bind(userController));

router.delete("/:id", userController.deleteUser.bind(userController));

router.put("/:id", userController.updateUser.bind(userController));

router.get("/email", userController.getUserByEmail.bind(userController));

router.get("/:id", userController.getUserById.bind(userController));

export default router;