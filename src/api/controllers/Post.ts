import { Request, Response } from "express";
import { PostService } from "../../business/Services/Post";
import { Prisma } from "@prisma/client";

export class PostController {
  private postService: PostService;

  constructor() {
    this.postService = new PostService();
  }

  public async getAllPosts(req: Request, res: Response) {
    const result = await this.postService.getAll();

    return res.status(200).json(result);
  }

  public async createPost(req: Request<unknown, unknown, Prisma.PostCreateInput>, res: Response) {
    const post = req.body;

    const result = await this.postService.create(post);

    return res.status(200).json(result);
  }

  public async deletePost(req: Request<{ id: number }, unknown, unknown>, res: Response) {
    const { id } = req.params;

    const result = await this.postService.delete(Number(id));

    return res.status(200).json(result);

  }


}
