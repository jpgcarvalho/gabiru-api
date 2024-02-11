import { Post, Prisma } from "@prisma/client";

export interface IPostService {
  create(data: Prisma.PostCreateInput): Promise<Post | null>;
  getAll(): Promise<Post[] | null>;
  delete(id: number): Promise<boolean>;
}
