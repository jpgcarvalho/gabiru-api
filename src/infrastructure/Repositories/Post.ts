import { Post, Prisma } from "@prisma/client";
import { IPostRepository } from "../../business/Interfaces/Repository/IPost";
import { databaseClient } from "../prismaClient";

export class PostRepository implements IPostRepository {

  database: typeof databaseClient.post;

  constructor() {
    this.database = databaseClient.post
  }

  async delete(id: number): Promise<boolean> {
    const response = await this.database.delete({
      where: {
        id
      }
    })

    return !!response;

  }

  async getAll(): Promise<Post[] | null> {

    const response = await this.database.findMany();

    console.log(response);

    return response;
  }


  async create(post: Prisma.PostCreateInput): Promise<Post | null> {

    const response = await this.database.create({
      data: {
        ...post
      }
    });

    return response;
  }

}
