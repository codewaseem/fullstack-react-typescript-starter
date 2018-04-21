import * as express from "express";
import { verifyUser, verifyAdmin } from "../controllers/auth";
import {
  sendJSONResponse, setDetailsFor
} from "../utils";
import { PageSetting } from "../models";
import cors from "cors";
const app = express.Router();

app.get("/", cors(), async (req: express.Request, res: express.Response) => {
  const sections = await PageSetting.find().exec();
  if (sections && sections.length >= 0) {
    sendJSONResponse(res, 200, true, sections[0]);
  } else {
    sendJSONResponse(res, 404, false, "Something went wrong");
  }
});

app.use(verifyUser);
app.use(verifyAdmin);

app.post("/", (req: express.Request, res: express.Response) => {
  setDetailsFor(PageSetting, req.body.details, res);
});

export default app;