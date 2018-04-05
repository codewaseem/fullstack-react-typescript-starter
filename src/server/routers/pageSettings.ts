import * as express from "express";
import { verifyUser, verifyAdmin } from "../controllers/auth";
import {
  sendJSONResponse, setDetailsFor
} from "../utils";
import { PageSetting } from "../models";
const app = express.Router();

app.get("/", async (req: express.Request, res: express.Response) => {
  const sections = await PageSetting.find().exec();
  if (sections && sections.length >= 0) {
    sendJSONResponse(res, 200, true, sections);
  } else {
    sendJSONResponse(res, 404, false, "Something went wrong");
  }
});

app.use(verifyUser);
app.use(verifyAdmin);

app.post("/", async (req: express.Request, res: express.Response) => {
  setDetailsFor(PageSetting, req.body.details, res);
});

export default app;