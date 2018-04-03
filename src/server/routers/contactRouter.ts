import * as express from "express";
import { verifyUser, verifyAdmin } from "../controllers/auth";
import {
  sendJSONResponse, saveModelAndSendResponse,
  updateModelAndSendResponse, removeModelByIdAndRespond,
  getAllModels, getModelById
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

app.post("/add", (req: express.Request, res: express.Response) => {
  saveModelAndSendResponse(ContactSection, req.body.details, res);
});

app.post("/update", (req: express.Request, res: express.Response) => {
  updateModelAndSendResponse(ContactSection, req.body.id, req.body.details, res);
});

export default app;