import * as express from "express";
import { verifyUser, verifyAdmin } from "../controllers/auth";

import {
  sendJSONResponse, saveModelAndSendResponse,
  setDetailsFor
} from "../utils";

import { ContactSection } from "../models";
const app = express.Router();

app.get("/", async (req: express.Request, res: express.Response) => {
  const contactSections = await ContactSection.find().exec();
  if (contactSections && contactSections.length >= 0) {
    sendJSONResponse(res, 200, true, contactSections[0]);
  } else {
    sendJSONResponse(res, 404, false, "Something went wrong");
  }
});

app.use(verifyUser);
app.use(verifyAdmin);

app.post("/", (req: express.Request, res: express.Response) => {
  setDetailsFor(ContactSection, req.body.details, res);
});

export default app;