import { Router } from "express";
import { PostController } from "../controllers/Post";

const router: Router = Router();

const postController = new PostController();

router.get("/", postController.getAllPosts.bind(postController));
router.post("/", postController.createPost.bind(postController));
router.delete("/:id", postController.deletePost.bind(postController));

export default router;
