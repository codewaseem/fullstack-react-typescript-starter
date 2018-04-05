import * as express from "express";
import { verifyUser, verifyAdmin } from "../controllers/auth";
import {
  sendJSONResponse, saveModelAndSendResponse, updateModelAndSendResponse,
  removeModelByIdAndRespond
} from "../utils";
import { Guest } from "../models";
const app = express.Router();

app.get("/", async (req: express.Request, res: express.Response) => {
  const sections = await Guest.find().exec();
  if (sections && sections.length >= 0) {
    sendJSONResponse(res, 200, true, sections);
  } else {
    sendJSONResponse(res, 404, false, "Something went wrong");
  }
});

app.use(verifyUser);
app.use(verifyAdmin);

app.post("/add/", (req: express.Request, res: express.Response) => {
  saveModelAndSendResponse(Guest, req.body.details, res);
});

app.post("/update/", (req: express.Request, res: express.Response) => {
  updateModelAndSendResponse(Guest, req.body.id, req.body.details, res);
});

app.post("/delete/", (req: express.Request, res: express.Response) => {
  removeModelByIdAndRespond(Guest, req.body.id, res);
});

export default app;