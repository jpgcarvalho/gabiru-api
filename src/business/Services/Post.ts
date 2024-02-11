import { Post, Prisma } from "@prisma/client";
import { IPostService } from "../Interfaces/Services/IPost";
import { IPostRepository } from "../Interfaces/Repository/IPost";
import { PostRepository } from "../../infrastructure/Repositories/Post";

export class PostService implements IPostService {

  postRepository: IPostRepository;

  constructor() {
    this.postRepository = new PostRepository();
  }

  async delete(id: number): Promise<boolean> {

    const response = await this.postRepository.delete(id);

    return response;

  }

  async getAll(): Promise<Post[] | null> {

    const response = await this.postRepository.getAll();

    return response;
  }

  async create(data: Prisma.PostCreateInput): Promise<Post | null> {

    const response = await this.postRepository.create(data);

    return response;
  }

}
