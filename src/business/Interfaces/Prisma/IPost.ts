import { IUser } from "./IUser";

export interface IPost {
  id: number
  createdAt: Date;
  updatedAt: Date;
  title: string;
  content?: string | null;
  published: boolean;
  author: IUser;
  authorId: number;
}