import { IPost } from "./IPost";

export interface IUser {
  id: number;
  email: string;
  name?: string | null;
  posts: IPost[];
}
