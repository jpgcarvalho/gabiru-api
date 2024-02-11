import { Post, Prisma } from "@prisma/client";

export interface IPostRepository {
  create(post: Prisma.PostCreateInput): Promise<Post | null>;
  getAll(): Promise<Post[] | null>;
  delete(id: number): Promise<boolean>;
}
