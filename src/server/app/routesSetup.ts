import { Express } from "express";
import { allRoutesRouter } from "../routers";

export default function setup(app: Express) {
  app.use("*", allRoutesRouter);
}