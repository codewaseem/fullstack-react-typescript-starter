import { Express } from "express";
import {
  allRoutes, users, products,
  sponsors, testimonials, guests, events,
  aboutSection, pageSettings
} from "../routers";

export default function setup(app: Express) {
  app.use("/users/", users);
  app.use("/products/", products);
  app.use("/sponsors/", sponsors);
  app.use("/testimonials/", testimonials);
  app.use("/guests/", guests);
  app.use("/events/", events);
  app.use("/aboutSection/", aboutSection);
  app.use("/pageSettings/", pageSettings);
  app.use("*", allRoutes);
}