import { Express } from "express";
import { allRoutesRouter, usersRouter, productsRouter } from "../routers";

export default function setup(app: Express) {
  app.use("/users/", usersRouter);
  app.use("/products/", productsRouter);
  app.use("*", allRoutesRouter);
}