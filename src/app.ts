import express from "express";
import personalRoutes from "./api/routes/Personal.routes"
import clientRoutes from "./api/routes/Client.routes";
import postRoutes from "./api/routes/Post.routes";
import exerciseRoutes from "./api/routes/Exercises.routes";
import routineRoutes from "./api/routes/Routines.routes";
import authRoutes from "./api/routes/Auth.routes";
import trainingDayRoutes from "./api/routes/TrainingDay.routes";
import workoutRoutes from "./api/routes/Workout.routes";

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
    this.server.use("/personal", personalRoutes);
    this.server.use("/client", clientRoutes);
    this.server.use("/post", postRoutes);
    this.server.use("/exercise", exerciseRoutes);
    this.server.use("/routine", routineRoutes);
    this.server.use("/auth", authRoutes);
    this.server.use("/trainingDay", trainingDayRoutes)
    this.server.use("/workout", workoutRoutes)
  }
}
