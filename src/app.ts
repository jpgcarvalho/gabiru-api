import express from "express";
import userRoutes from "./api/routes/User.routes";
import postRoutes from "./api/routes/Post.routes";

export class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middleware();
    this.router();
  }

  private middleware() {
    this.server.use(express.json());
  }

  private router() {
    this.server.use("/user", userRoutes);
    this.server.use("/post", postRoutes);
  }
}