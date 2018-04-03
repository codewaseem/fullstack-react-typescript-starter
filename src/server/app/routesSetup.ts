import { Express } from "express";
import { allRoutesRouter, usersRouter, productsRouter, contactRouter } from "../routers";

export default function setup(app: Express) {
  app.use("/users/", usersRouter);
  app.use("/products/", productsRouter);
  app.use("/contactSection", contactRouter);
  app.use("*", allRoutesRouter);
}