import { Router } from "express";
import { PostController } from "../controllers/Post";
import authenticateToken from "../../business/Settings/Auth/AuthMiddleware";

const router: Router = Router();

const postController = new PostController();

/* router.use(authenticateToken); */

router.get("/", postController.getAllPosts.bind(postController));
router.post("/", postController.createPost.bind(postController));
router.delete("/:id", postController.deletePost.bind(postController));

export default router;
