import { Express } from "express";
import { allRoutesRouter, usersRouter } from "../routers";

export default function setup(app: Express) {
  app.use("/users/", usersRouter);
  app.use("*", allRoutesRouter);
}