import { Express } from "express";
import {
  allRoutesRouter, usersRouter, productsRouter, contactRouter,
  sponsorsRouter, testimonialRouter, guestRouter, eventsRouter,
  aboutRouter, pageSectionRouter
} from "../routers";

export default function setup(app: Express) {
  app.use("/users/", usersRouter);
  app.use("/products/", productsRouter);
  app.use("/contactSection/", contactRouter);
  app.use("/sponsorsSection/", sponsorsRouter);
  app.use("/testimonialsSection/", testimonialRouter);
  app.use("/guestSection/", guestRouter);
  app.use("/eventSection/", eventsRouter);
  app.use("/aboutSection/", aboutRouter);
  app.use("/pageSections/", pageSectionRouter);
  app.use("*", allRoutesRouter);
}